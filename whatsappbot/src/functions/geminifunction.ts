import { GoogleGenerativeAI } from '@google/generative-ai'

import { SYSTEM_PROMPT } from "./systemPrompt";

const genAI = new GoogleGenerativeAI("AIzaSyBQmHT0stUZvudyxTIwN34IvXDrwtzlePY");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function getGeminiResponse(userMessage: string): Promise<string> {
  try {
    const structuredPrompt = SYSTEM_PROMPT + userMessage;
    const result = await model.generateContent(structuredPrompt);
    const response = result.response.text();
    return response;
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    return `**Assessment:** I'm experiencing technical difficulties right now.
    **Main Answer:** I apologize, but I'm unable to process your request at the moment due to technical issues kindly reach to doctor if there is any sever emergency.
    **Next Steps:** Please try again in a few moments. If this continues, the issue should resolve shortly.
    I'm here to help once the technical issue is resolved! 🤖`;
  }
}

