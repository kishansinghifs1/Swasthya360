import fetch from "node-fetch";
import multer from "multer";
import FormData from "form-data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const FASTAPI_URL = "https://swasthya360-6.onrender.com";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 },
});

// Helper function to save chat history
const saveChatHistory = async (userId, message, sender) => {
    try {
        await prisma.chatHistory.create({
            data: {
                userId,
                message,
                sender
            }
        });
    } catch (error) {
        console.error('Error saving chat history:', error);
        // Don't throw error, just log it to avoid disrupting main functionality
    }
};

export const healthCheck = async (req, res) => {
    try {
        const response = await fetch(`${FASTAPI_URL}/health`);
        const healthData = await response.json();
        res.json({ success: true, data: healthData });
    } catch (error) {
        console.error('Health check failed:', error);
        res.status(503).json({
            error: "AI service is currently unavailable",
            message: "Could not connect to AI agent"
        });
    }
};

export const ask = async (req, res) => {
    try {
        const { message, userId } = req.body;
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: "Message is required and must be a string" });
        }
        if (!userId) {
            return res.status(400).json({ error: "userId is required" });
        }

        // Save user message
        await saveChatHistory(userId, message, 'USER');

        const response = await fetch(`${FASTAPI_URL}/ask`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`FastAPI responded with status: ${response.status}, message: ${errorText}`);
        }

        const aiResponse = await response.json();
        
        // Save agent response
        if (aiResponse.response || aiResponse.message) {
            const agentMessage = aiResponse.response || aiResponse.message || JSON.stringify(aiResponse);
            await saveChatHistory(userId, agentMessage, 'AGENT');
        }

        res.json({ success: true, data: aiResponse });

    } catch (error) {
        console.error('Error forwarding request to AI agent:', error);
        if (error.code === 'ECONNREFUSED') {
            res.status(503).json({
                error: "AI service is currently unavailable",
                message: "Could not connect to AI agent"
            });
        } else {
            res.status(500).json({ error: "Internal server error", message: error.message });
        }
    }
};

export const askImage = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!req.file) return res.status(400).json({ error: "Image file is required" });
        if (!req.file.mimetype.startsWith('image/')) return res.status(400).json({ error: "File must be an image" });
        if (!userId) return res.status(400).json({ error: "userId is required" });

        const formData = new FormData();
        formData.append('file', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });

        const response = await fetch(`${FASTAPI_URL}/ask/image`, {
            method: 'POST',
            body: formData,
            headers: formData.getHeaders()
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`FastAPI responded with status: ${response.status}, message: ${errorText}`);
        }

        const aiResponse = await response.json();
        
        // Save only agent response for image (as requested)
        if (aiResponse.response || aiResponse.message) {
            const agentMessage = aiResponse.response || aiResponse.message || JSON.stringify(aiResponse);
            await saveChatHistory(userId, `[Image Analysis] ${agentMessage}`, 'AGENT');
        }

        res.json({ success: true, data: aiResponse });

    } catch (error) {
        console.error('Error processing image request:', error);
        if (error.code === 'ECONNREFUSED') {
            res.status(503).json({
                error: "AI service is currently unavailable",
                message: "Could not connect to AI agent"
            });
        } else {
            res.status(500).json({ error: "Internal server error", message: error.message });
        }
    }
};

export const askVoice = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!req.file) return res.status(400).json({ error: "Audio file is required" });
        if (!userId) return res.status(400).json({ error: "userId is required" });

        const allowedAudioTypes = [
            "audio/mpeg","audio/mp4","audio/m4a","audio/wav","audio/webm","audio/ogg","audio/flac"
        ];
        if (!allowedAudioTypes.includes(req.file.mimetype)) {
            return res.status(400).json({
                error: "File must be an audio file (mp3, m4a, wav, webm, ogg, flac)"
            });
        }

        const formData = new FormData();
        formData.append('file', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });

        const response = await fetch(`${FASTAPI_URL}/ask/voice`, {
            method: 'POST',
            body: formData,
            headers: formData.getHeaders()
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`FastAPI responded with status: ${response.status}, message: ${errorText}`);
        }

        const aiResponse = await response.json();
        
        // Save only agent response for voice (as requested)
        if (aiResponse.response || aiResponse.message) {
            const agentMessage = aiResponse.response || aiResponse.message || JSON.stringify(aiResponse);
            await saveChatHistory(userId, `[Voice Message] ${agentMessage}`, 'AGENT');
        }

        res.json({ success: true, data: aiResponse });

    } catch (error) {
        console.error('Error processing voice request:', error);
        if (error.code === 'ECONNREFUSED') {
            res.status(503).json({
                error: "AI service is currently unavailable",
                message: "Could not connect to AI agent"
            });
        } else {
            res.status(500).json({ error: "Internal server error", message: error.message });
        }
    }
};

export { upload };