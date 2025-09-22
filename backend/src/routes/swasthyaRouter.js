import { authMiddleware } from "../middleware/auth.middleware.js";

import express from "express";

const SwasthyaRouter = express.Router();

SwasthyaRouter.post("/text" , authMiddleware, textController);
SwasthyaRouter.post("/image" , authMiddleware ,  imageController);
SwasthyaRouter.post("/voice",authMiddleware ,voiceController)
