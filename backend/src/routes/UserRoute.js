import { updateUserController , loginUserController , signupController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

import express from "express";

const UserRouter = express.Router();

UserRouter.post("/signup", signupController);
UserRouter.post("/login", loginUserController);
UserRouter.put("/update",authMiddleware, updateUserController);



export default UserRouter;
