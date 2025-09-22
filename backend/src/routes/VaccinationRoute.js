import express from "express";
import {
  getVaccinationReports,
  createVaccinationReport,

} from "../controllers/vaccination.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const vaccinationRouter = express.Router();

// Protect all routes with authMiddleware
vaccinationRouter.get("/", authMiddleware, getVaccinationReports);      // GET all reports
vaccinationRouter.post("/", authMiddleware, createVaccinationReport);      // CREATE report
// vaccinationRouter.put("/", authMiddleware, updateVaccinationReport);    // UPDATE report by ID

export default vaccinationRouter;