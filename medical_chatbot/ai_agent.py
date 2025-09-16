from langchain.agents import tool
from tools import swasthya360, call_emergency
from dotenv import load_dotenv
import os

load_dotenv()

@tool
def swasthya360_tool(input: str) -> str:
    """
    1. Explain preventive healthcare practices in easy steps 
       (hygiene, safe water, nutrition, exercise).
    2. Describe common disease symptoms clearly so people know 
       when to seek medical help.
    3. Share accurate vaccination schedules for children, adults, 
       and elderly, based on Indian government guidelines.
    4. Provide practical tips for staying healthy during outbreaks 
       (dengue, malaria, flu, COVID).
    5. Encourage professional medical consultation if symptoms 
       are serious, but never cause fear.

    """
    return swasthya360(input)

@tool
def call_emergency_tool() -> None:
    """
    Place an emergency call to the safety helpline's phone number via Twilio.
    Use this only if the user expresses suicidal ideation, intent to self-harm,
    or describes a mental health emergency requiring immediate help.

    """
    call_emergency()



# step1 : Create an AI agent & link backend

from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.prebuilt import create_react_agent


tools = [swasthya360_tool, call_emergency_tool]

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.2,
    max_output_tokens=1000,
    api_key=os.getenv("api_key")
)

graph = create_react_agent(
    llm,
    tools,
)


system_prompt = """
You are Swasthya360, a trusted community health advisor for rural and semi-urban India. 
You explain preventive healthcare in warm, simple, and culturally relevant language, while 
also staying alert to urgent health concerns. 

Your role:
1. Share preventive healthcare practices (hygiene, safe water, nutrition, exercise) 
   in everyday words that anyone can follow.
2. Describe common disease symptoms clearly so people know when to seek medical help.
3. Provide accurate vaccination schedules for children, adults, and elderly, 
   based on Indian government guidelines.
4. Offer practical tips during seasonal outbreaks (dengue, malaria, flu, COVID).
5. Always encourage professional consultation when symptoms are serious, but never cause fear.

You have access to two tools:
1. `swasthya360_tool`: Use this for preventive healthcare, symptoms, vaccination schedules, and outbreak tips.
2. `call_emergency_tool`: Use this immediately if the user expresses suicidal thoughts, 
   self-harm intentions, or is in immediate crisis.

Multilingual Support:
- Detect the user’s input language.
- If input is in English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati,
  Kannada, Malayalam, Punjabi, Odia, or Urdu → respond in the same language.
- If the language is unrecognized → default to Hindi (or English if Hindi is not suitable).
- Keep translations conversational, warm, and culturally relevant.

Key Principles:
- Use short, clear sentences that are easy to read on SMS/WhatsApp.
- Avoid medical jargon. 
- Always be friendly, supportive, and encouraging.
- Give step-by-step actions people can try at home where safe.
- Keep conversations interactive by asking open-ended questions.

Be vigilant:
- If the conversation turns toward distress, trauma, or crisis → 
  choose the appropriate tool immediately.
"""

def parse_response(stream):
    tool_called_name = None
    final_response = None

    for s in stream:
        # Check if tool was called
        tool_data = s.get('tool')
        if tool_data:
            tool_messages = tool_data.get('messages', [])
            for msg in tool_messages:
                tool_called_name = getattr(msg, 'name', None)

        # Check if agent returned a message
        agent_data = s.get('agent')
        if agent_data:
            messages = agent_data.get('messages', [])
            for msg in messages:
                if hasattr(msg, "content") and msg.content:
                    final_response = msg.content

    return tool_called_name, final_response

if __name__ == "__main__":
    user_input = input("You:")  # get user input
    # Use the agent to process input
    stream = graph.stream({"messages": [{"role": "user", "content": user_input}]})
    
    tool_name, response = parse_response(stream)
    print("Tool called:", tool_name)
    print("AI Response:", response)