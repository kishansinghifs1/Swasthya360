import { Hono } from 'hono'
import { GoogleGenerativeAI } from '@google/generative-ai'
import fetch from 'cross-fetch'


const genAI = new GoogleGenerativeAI("AIzaSyBQmHT0stUZvudyxTIwN34IvXDrwtzlePY")
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
const app = new Hono()


app.get('/ask', async (c) => {
  const q = c.req.query('q') || 'Hello Gemini, introduce yourself!'
  const result = await model.generateContent(q)
  const response = result.response.text()
  return c.json({ query: q, answer: response })
})


app.post('/ask', async (c) => {
  const body = await c.req.json<{ question: string }>()
  const result = await model.generateContent(body.question)
  const response = result.response.text()
  return c.json({ query: body.question, answer: response })
})


// Health check route
app.get('/ping', (c) => c.json({ message: "pong" }))

// GET route for webhook verification
app.get('/webhook', (c) => {
  const mode = c.req.query('hub.mode')
  const token = c.req.query('hub.verify_token')
  const challenge = c.req.query('hub.challenge')
     
  if (mode && token && challenge) {
    if (mode === 'subscribe' && token === 'hello') {
      console.log('WEBHOOK_VERIFIED')
       return c.text(challenge)
    }
    return c.text('Bad Request', 400)
  }
  return c.text('Forbidden', 403)
})

// Function to send WhatsApp text message
async function sendWhatsAppMessage(to : any, messageText : any) {
  const url = "https://graph.facebook.com/v23.0/710059685534150/messages"
  
  const data = {
    messaging_product: 'whatsapp',
    to: to,
    type: 'text',
    text: {
      body: messageText
    }
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer EAAK9FDpSb2kBPbqY5rZAUAZBr5fbZAtEZCWkXoiJ2TepanLixPzUZAB9maXreThZABDPZAGEGVucT6939jKnK3GCbZCZCMzZC2vnzWfI8MssnMqWppNbK3ZAteokbPHwmBnChkszlXssv4Gx34tZCfMEkLksVLRYzv6FjHKbhm9Pd4d5Pa05HVd9TvdDtHFAIzeroJ2oos26Ki1ZCRy03QAdLZAyQjZBQAYgAAkKgdcO2NTqcCGDnGZBzQZDZD`
      },
      body: JSON.stringify(data),
    })
    
    const result = await response.json()
    console.log('Message sent:', result)
    return result
    
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}

// POST route for handling incoming WhatsApp messages
app.post('/webhook', async (c) => {
  try {
    const body = await c.req.json()
    console.log('Incoming webhook:', JSON.stringify(body, null, 2))

    // Check if this is a WhatsApp message
    if (body.object === 'whatsapp_business_account') {
      if (body.entry && 
          body.entry[0] && 
          body.entry[0].changes && 
          body.entry[0].changes[0] && 
          body.entry[0].changes[0].value &&
          body.entry[0].changes[0].value.messages &&
          body.entry[0].changes[0].value.messages[0]) {
        
        const message = body.entry[0].changes[0].value.messages[0]
        const from = message.from 
        
        console.log('Message received from:', from)
        console.log('Message content:', message)
        
        // Send "thanks" reply
        await sendWhatsAppMessage(from, 'Thanks')
        
        return c.json({ status: 'success', message: 'Reply sent' })
      }
    }
    
    return c.json({ status: 'success', message: 'Webhook received' })
    
  } catch (error) {
    console.error('Error processing webhook:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Manual route for sending template messages (for testing)
app.post('/send-template', async (c) => {
  const url = "https://graph.facebook.com/v23.0/710059685534150/messages"
   
  const data = {
    messaging_product: 'whatsapp',
    to: '+919511964739',
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
         'Authorization': `Bearer EAAK9FDpSb2kBPbqY5rZAUAZBr5fbZAtEZCWkXoiJ2TepanLixPzUZAB9maXreThZABDPZAGEGVucT6939jKnK3GCbZCZCMzZC2vnzWfI8MssnMqWppNbK3ZAteokbPHwmBnChkszlXssv4Gx34tZCfMEkLksVLRYzv6FjHKbhm9Pd4d5Pa05HVd9TvdDtHFAIzeroJ2oos26Ki1ZCRy03QAdLZAyQjZBQAYgAAkKgdcO2NTqcCGDnGZBzQZDZD`
     },
     body: JSON.stringify(data),
 })
     
 return c.json(await response.json()) 
})

export default app