import { createUserController } from "../controllers/user.controller.js";


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
export default router;
