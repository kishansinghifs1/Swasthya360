import { Hono } from "hono";

import { getGeminiResponse } from "../functions/geminifunction";
import { sendWhatsAppMessage, sendWhatsAppTemplate } from "../functions/whatsappmessages";
import { containsEmergencyKeywords } from "../emergency/emergency";
import { callEmergency } from "../emergency/emergency"; 

export const userRouter = new Hono<{
  Bindings: {
    Token_Secret_KEY: string;
    LONG_ACCESS_TOKEN: string;
    Your_PHONE_NUMBER_ID: string;
    Phone_Number: string;
    TWILIO_ACCOUNT_SID: string;
    TWILIO_AUTH_TOKEN: string;
    TWILIO_FROM_NUMBER: string;
    EMERGENCY_CONTACT: string;
  };
}>();
userRouter.get("/ping", (c) => c.json({ message: "pong" }));
userRouter.get("/", (c) => {
  const mode = c.req.query("hub.mode");
  const token = c.req.query("hub.verify_token");
  const challenge = c.req.query("hub.challenge");

  if (mode && token && challenge) {
    if (mode === "subscribe" && token === c.env.Token_Secret_KEY) {
      console.log("WEBHOOK_VERIFIED");
      return c.text(challenge);
    }
    return c.text("Bad Request", 400);
  }
  return c.text("Forbidden", 403);
});

userRouter.post('/send-template', async (c) => {
  const url = `https://graph.facebook.com/v23.0/${c.env.Your_PHONE_NUMBER_ID}/messages`
   
  const data = {
    messaging_product: 'whatsapp',
    to: c.env.Phone_Number,
    type: 'template',
    template: {
      name: 'hello_world',  
      language: { code: 'en_US' },
    },
  }
    
  const response = await fetch(url, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${c.env.LONG_ACCESS_TOKEN}`
     },
     body: JSON.stringify(data),
  })
     
  return c.json(await response.json() as any) 
})
userRouter.post("/", async (c) => {
  try {
    const body = await c.req.json();

    if (body.object === 'whatsapp_business_account') {
      if (body.entry &&
          body.entry[0] &&
          body.entry[0].changes &&
          body.entry[0].changes[0] &&
          body.entry[0].changes[0].value &&
          body.entry[0].changes[0].value.messages &&
          body.entry[0].changes[0].value.messages[0]) {

        const message = body.entry[0].changes[0].value.messages[0];
        const from = message.from;
        const messageText = message.text?.body || '';
        if (containsEmergencyKeywords(messageText)) {
          try {
            const callResult = await callEmergency(
              c.env.TWILIO_ACCOUNT_SID,
              c.env.TWILIO_AUTH_TOKEN,
              c.env.TWILIO_FROM_NUMBER,
              c.env.EMERGENCY_CONTACT
            );
            return c.json({
              status: 'success',
              message: callResult,
              userMessage: messageText
            });

          } catch (error) {
            console.error('Emergency call failed:', error);
            return c.json({
              status: 'error',
              message: 'Failed to make emergency call',
              error: error instanceof Error ? error.message : 'Unknown error'
            }, 500);
          }
        }
        if (messageText.toLowerCase().includes('template') || messageText.toLowerCase().includes('hello')) {
          await sendWhatsAppTemplate(from);
          
          return c.json({
            status: 'success',
            message: 'Template sent'
          });
        } else {
          const geminiResponse = await getGeminiResponse(messageText);
          await sendWhatsAppMessage(from, geminiResponse);
          return c.json({
            status: 'success',
            message: 'Gemini response sent',
            userMessage: messageText,
            geminiResponse: geminiResponse
          });
        }
      }
    }

    return c.json({ status: 'success', message: 'Webhook received but no message to process' });
    
  } catch (error) {
    console.error('Error processing webhook:', error);
    return c.json({ 
      status: 'error', 
      message: 'Failed to process webhook',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});


userRouter.post('/test-emergency-call', async (c) => {
  try {
    const result = await callEmergency(
      c.env.TWILIO_ACCOUNT_SID,
      c.env.TWILIO_AUTH_TOKEN,
      c.env.TWILIO_FROM_NUMBER,
      c.env.EMERGENCY_CONTACT
    );
    
    return c.json({
      success: true,
      message: 'Emergency call test completed',
      result: result
    });
  } catch (error) {
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});