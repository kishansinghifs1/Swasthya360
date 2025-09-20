import { createUserController,loginUserController } from "../controllers/user.controller.js";
import { addMedicalConditionController, getMedicalConditionsController } from "../controllers/medical-records.controller.js";
import {
  addAllergyController,
  getAllergiesController
} from "../controllers/allergies.controller.js";

import {
  addChatMessageController,
  getChatHistoryController
} from "../controllers/chatHistory.controller.js";

import {
  addVaccinationReportController,
  getVaccinationReportsController
} from "../controllers/vaccination.controller.js";

import express from "express";
const router = express.Router();
router.post("/createuser", async (req, res) => {
    try {
        const user = await createUserController(req,res);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.post("/login", async (req, res) => {
    try {
        const user = await loginUserController(req,res);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.post("/medical-record/add", addMedicalConditionController);
router.get("/medical-record/:userId", getMedicalConditionsController);
router.post("/allergies-record/add", addAllergyController);
router.get("/allergies-record/:userId", getAllergiesController);
router.post("/vaccination-report/add", addVaccinationReportController);
router.get("/vaccination-report/:userId", getVaccinationReportsController);
router.post("/chat-history/add", addChatMessageController);
router.get("/chat-history/:userId", getChatHistoryController);



export default router;
