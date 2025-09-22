import express from "express";
 // You may need to install: npm install node-fetch
import { authMiddleware } from "../middleware/auth.middleware.js";
import { askAI } from "../controllers/ai.controller.js";
const aiRouter = express.Router();



aiRouter.post("/ask",authMiddleware,askAI )

export default aiRouter;