# ===================================
# Step 1: MedGemma Chatbot Core
# ===================================

from groq import Groq
from config import groq_api_key

def swasthya360(prompt: str) -> str:
    """
    Ultra-fast version using Groq's fastest model (Llama 3 8B)
    """
    system_prompt = """You are Swasthya360, a trusted AI health companion for Indian communities. Provide fast, safe health guidance with appropriate urgency levels: 🚨 Emergency, ⚠️ Urgent, 💡 Monitor, ✅ Prevention. Always include medical disclaimers and recommend professional consultation when needed."""
    
    try:
        client = Groq(api_key=groq_api_key)
        
        response = client.chat.completions.create(
            model="meta-llama/llama-4-scout-17b-16e-instruct",  # Fastest model
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt},
            ],
            max_tokens=100, 
            temperature=0.2,  
            top_p=0.9,
        )
        
        return response.choices[0].message.content.strip()
        
    except Exception as e:
        print(f"Groq API Error: {e}")
        return "I'm experiencing technical issues. Please consult a healthcare professional for immediate concerns."
# ===================================
# Step 2: Emergency Call via Twilio
# ===================================

from twilio.rest import Client
from config import TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, EMERGENCY_CONTACT


def call_emergency():
    """
    Calls emergency services via Twilio.
    """
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        call = client.calls.create(
            to=EMERGENCY_CONTACT,
            from_=TWILIO_FROM_NUMBER,
            url="https://demo.twilio.com/welcome/sms/reply/",
        )
        return f"Emergency message sent to : {call.sid}"
    except Exception as e:
        return f"Error triggering emergency call: {e}"

