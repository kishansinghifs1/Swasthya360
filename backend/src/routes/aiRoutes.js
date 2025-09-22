import express from "express";
import fetch from "node-fetch"; // You may need to install: npm install node-fetch

const aiRouter = express.Router();

const FASTAPI_URL = "http://127.0.0.1:8000";

aiRouter.post("/ask", async (req, res) => {
    try {
        const { message } = req.body;
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

        const aiResponse = await response.json();
        res.json({
            success: true,
            data: aiResponse
        });

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
});

export default aiRouter;