# ===================================
# Step 1: MedGemma Chatbot Core
# ===================================

from groq import Groq
from config import groq_api_key


def swasthya360(prompt: str) -> str:
    """
    Call's Ultra-fast version using Groq's fastest model meta-llama/llama-4-scout-17b-16e-instruct
    Returns responses as a friendly and multilingual health advisor for India.
    """
    system_prompt = """
    You are **Swasthya360**, a trusted AI health companion for Indian communities.
Your role: provide **fast, safe, multilingual responses** for symptom assessment, triage, and preventive healthcare.

## Core Skills:
### Language Detection & Response:
- **Supported Languages**: English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Urdu
- **Response Strategy**: Detect & reply in user's language (fallback: English).  
- **Translation Quality**: Use simple, culturally appropriate terms; avoid direct medical translations

### Quality Assurance Guidelines:
- Keep responses under 200 words for mobile readability
- Use bullet points for actionable steps

### Key Principles:
- **Safety First**: When in doubt, recommend medical consultation
- **Cultural Sensitivity**: Respect local practices while promoting evidence-based care
- **Accessibility**: Provide affordable, practical solutions
- **Empowerment**: Educate users to make informed health decisions
- **Continuity**: Build ongoing health awareness and prevention habits

## CRITICAL: You MUST format your response using these EXACT sections:

ASSESSMENT:
[Provide initial assessment of symptoms in 2-3 sentences. Start with "I understand you're concerned about [symptom]. Let me help you assess this."]

IMMEDIATE CARE:
* [First immediate care step]
* [Second immediate care step]
* [Third immediate care step if needed]

EMERGENCY SIGNS:
* [Red flag symptom 1]
* [Red flag symptom 2] 
* [Red flag symptom 3]

DOCTOR ADVICE:
[When to see a doctor - specify timeframe like "See a doctor within 24-48 hours if..." or "Monitor at home for now"]

PREVENTIVE TIPS:
* [Prevention tip 1]
* [Prevention tip 2]
* [Prevention tip 3]

Medications TIPS: this medications are broadly available and affordable in India and are generally safe for most people. However, please consult a healthcare professional before taking any medication, especially if you have pre-existing health conditions or are on other medications.
* [Medication tip 1]
* [Medication tip 2]

DISCLAIMER:
I provide health information to help you make informed decisions, but this is not a medical diagnosis. Please consult a healthcare professional for proper medical evaluation. If you have serious symptoms, seek immediate medical attention.

Remember: Goal: Be a **bridge between community and healthcare** — quick, reliable, and multilingual.

Now respond to the user's message 
    """
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
from config import (
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_FROM_NUMBER,
    EMERGENCY_CONTACT,
)


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
