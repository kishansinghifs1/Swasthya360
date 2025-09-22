import { PrismaClient } from "@prisma/client";
const FASTAPI_URL = "http://127.0.0.1:8000";
const prisma = new PrismaClient();
import fetch from "node-fetch";
export const askAI = async (req, res) => {
    try {
            const { message } = req.body;
            const userChatEntry = await prisma.chatHistory.create({
            data: {
                message: message,
                sender: 'USER',
                userId: req.userId
            }
        });
        if(!userChatEntry){
            return res.status(500).json({error:"Failed to log user message"})
        }
        console.log(userChatEntry)
            if (!message || typeof message !== 'string') {
                return res.status(400).json({ 
                    error: "Message is required and must be a string" 
                });
            }
            const response = await fetch(`${FASTAPI_URL}/ask`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });
    
            if (!response.ok) {
                throw new Error(`FastAPI responded with status: ${response.status}`);
            }
    
            const aiResponse = await response.json() || "server was not runnu";
            res.json({
                success: true,
                data: aiResponse
            });
             const agentChatEntry = await prisma.chatHistory.create({
            data: {
                message: aiResponse.message || aiResponse.response || JSON.stringify(aiResponse),
                sender: 'AGENT',
                userId: req.userId
            }
        });
        if(!agentChatEntry){
            console.error("Failed to log agent response")
        }
        console.log(agentChatEntry)
    
        } catch (error) {
            console.error('Error forwarding request to AI agent:', error);
            if (error.code === 'ECONNREFUSED') {
                res.status(503).json({ 
                    error: "AI service is currently unavailable",
                    message: "Could not connect to AI agent"
                });
            } else {
                res.status(500).json({ 
                    error: "Internal server error",
                    message: error.message 
                });
            }
        }
};