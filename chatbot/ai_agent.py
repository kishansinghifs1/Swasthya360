from langchain.agents import tool
from tools import swasthya360_agent, call_emergency


@tool
def swasthya360_tool(input: str) -> str:
    """
    Advanced health advisor tool for Indian communities providing:
    1. Symptom assessment and triage with structured evaluation
    2. Preventive healthcare practices (hygiene, safe water, nutrition, exercise)
    3. Disease-specific guidance for common Indian health conditions
    4. Vaccination schedules based on Government of India guidelines
    5. Outbreak management tips (dengue, malaria, flu, COVID)
    6. Risk stratification: Emergency/Urgent/Monitor/Prevention focus
    7. Culturally sensitive health education in multiple Indian languages
    8. Clear action steps for home care and when to seek medical help
    9. Suggest simple medications available in India with safety advice
    10. Mental health first aid and crisis resources
    Returns comprehensive health guidance with clear action steps and urgency levels.
    """
    return swasthya360_agent(input)


@tool
def call_emergency_tool() -> None:
    """
    Place an emergency call to the safety helpline's phone number via Twilio.
    - To be triggered immediately when life-threatening symptoms or heavy emergencies are detected.
    - Ensures if there is thought regarding to the suicide and self-harm the service must be called right away.
    - Returns a confirmation message after initiating the call.
    """
    call_emergency()


from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.prebuilt import create_react_agent
from config import gemini_api_key

tools = [swasthya360_tool, call_emergency_tool]

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash", temperature=0.2, api_key=gemini_api_key
)

graph = create_react_agent(
    llm,
    tools=tools,
)

system_prompt = """
You are Swasthya360, an advanced AI health companion for Indian communities specializing in early symptom detection, preventive healthcare, and emergency response. You have access to two tools:
1.`swasthya360_tool` : use this tool for comprehensive health guidance, including symptom assessment, preventive care , medications and vaccination schedules.
2.`call_emergency_tool` : use this tool to place an emergency call during life-threatening events to the safety helpline's phone number via Twilio.
Always prioritize user safety. If the user describes life-threatening symptoms (e.g., chest pain, severe bleeding, difficulty breathing , labor pain , sudden accident  ) or expresses suicidal thoughts/self-harm, immediately use the `call_emergency_tool` to initiate an emergency call.
"""


def parse_response(stream):
    tool_called_name = "None"
    final_response = None

    for s in stream:
        # Check if tool was called
        tool_data = s.get("tools")
        if tool_data:
            tool_messages = tool_data.get("messages")
            if tool_messages and isinstance(tool_messages, list):
                for msg in tool_messages:
                    tool_called_name = getattr(msg, "name", "None")

        # Check if agent returned a message
        agent_data = s.get("agent")
        if agent_data:
            messages = agent_data.get("messages")
            if messages and isinstance(messages, list):
                for msg in messages:
                    if msg.content:
                        final_response = msg.content

    return tool_called_name, final_response


# --------------------------------------------
#  For testing purpose only
# --------------------------------------------

# if __name__ == "__main__":
#     user_input = input("You:")  # get user input
#     # Use the agent to process input
#     stream = graph.stream({"messages": [{"role": "user", "content": user_input}]})

#     tool_name, response = parse_response(stream)
#     print("Tool called:", tool_name)
#     print("AI Response:", response)
