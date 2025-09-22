import express from "express";
import { healthCheck, ask, askImage, askVoice, upload } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.get("/health", healthCheck);
aiRouter.post("/ask", ask);
aiRouter.post("/ask/image", upload.single('file'), askImage);
aiRouter.post("/ask/voice", upload.single('file'), askVoice);

export default aiRouter;
