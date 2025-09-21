export async function sendWhatsAppMessage(to: any, messageText: any) {
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
        'Authorization': `Bearer EAAK9FDpSb2kBPWitGt4lGwiWWKenIST2ZC50mIAWVh1IXRkp54Vi4VXHcopVrS7pAbi5Ds2gonEVymd4oj2ZBDBNeZBip3t7ri8ZBZAwQI37Ek35OZCHPZCpRo8b4yKuisSrF2ACfTviZBIPVpnZCZCQs11KtTVqHNz8ypSSRMlREVSe3Udw8QDxNylx8F7VztZAXMLkcV4Gi7uhJYzKEFBenowhJas1dpzv8g9tgyq37YD`
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

export async function sendWhatsAppTemplate(to: string) {
  const url = "https://graph.facebook.com/v23.0/710059685534150/messages"
    
  const data = {
    messaging_product: 'whatsapp',
    to: to,
    type: 'template',
    template: {
      name: 'hello_world',
      language: { code: 'en_US' },
    },
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer EAAK9FDpSb2kBPWitGt4lGwiWWKenIST2ZC50mIAWVh1IXRkp54Vi4VXHcopVrS7pAbi5Ds2gonEVymd4oj2ZBDBNeZBip3t7ri8ZBZAwQI37Ek35OZCHPZCpRo8b4yKuisSrF2ACfTviZBIPVpnZCZCQs11KtTVqHNz8ypSSRMlREVSe3Udw8QDxNylx8F7VztZAXMLkcV4Gi7uhJYzKEFBenowhJas1dpzv8g9tgyq37YD`
      },
      body: JSON.stringify(data),
    })
        
    const result = await response.json()
    console.log('Template sent:', result)
    return result
      
  } catch (error) {
    console.error('Error sending template:', error)
    throw error
  }
}