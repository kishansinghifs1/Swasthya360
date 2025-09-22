import fetch from "node-fetch";
import multer from "multer";
import FormData from "form-data";

const FASTAPI_URL = "http://127.0.0.1:8000";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 },
});

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
        const { message } = req.body;
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: "Message is required and must be a string" });
        }

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
        if (!req.file) return res.status(400).json({ error: "Image file is required" });
        if (!req.file.mimetype.startsWith('image/')) return res.status(400).json({ error: "File must be an image" });

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
        if (!req.file) return res.status(400).json({ error: "Audio file is required" });

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
