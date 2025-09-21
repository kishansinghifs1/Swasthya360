const EMERGENCY_KEYWORDS = [
  'chest pain', 'heart attack', 'stroke', 'seizure', 'unconscious', 'breathing problem',
  'severe pain', 'bleeding heavily', 'overdose', 'poisoning', 'choking',
  'labour pain', 'labor pain', 'contractions', 'water broke', 'bleeding pregnant',
  'pregnancy emergency', 'miscarriage', 'premature labor',
  'suicide', 'kill myself', 'end my life', 'want to die', 'suicidal',
  'self harm', 'cut myself', 'hurt myself', 'overdose pills',
  'domestic violence', 'being hurt', 'afraid for my life', 'threatening me',
  'sexual assault', 'rape', 'abuse', 'violence',
  'emergency', 'help me', 'urgent', 'crisis', 'danger', 'scared',
  'call 911', 'call ambulance', 'need help now'
];

export function containsEmergencyKeywords(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  return EMERGENCY_KEYWORDS.some(keyword => 
    lowerMessage.includes(keyword.toLowerCase())
  );
}

export function getEmergencyKeywords(message: string): string[] {
  const lowerMessage = message.toLowerCase();
  return EMERGENCY_KEYWORDS.filter(keyword => 
    lowerMessage.includes(keyword.toLowerCase())
  );
}

export async function callEmergency(
  accountSid: string,
  authToken: string,
  twilioPhoneNumber: string,
  emergencyContactNumber: string
): Promise<string> {
  const twilioCallUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`;
  
  const params = new URLSearchParams({
    To: emergencyContactNumber,
    From: twilioPhoneNumber,
    Url: "https://demo.twilio.com/welcome/voice/",
    Method: 'GET'
  });

  try {
    const response = await fetch(twilioCallUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Twilio Call API error: ${response.status} - ${errorData}`);
    }

    const result = await response.json() as any;
    console.log('Emergency call initiated:', result.sid);

    return `Emergency call sent: ${result.sid}`;
    
  } catch (error) {
    console.error('Error triggering emergency call:', error);
    throw new Error(`Error triggering emergency call: ${error}`);
  }
}