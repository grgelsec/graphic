import { Router } from "express";
import { userSignUp } from "app/controllers/authController.js";
export const authRouter = Router();

authRouter.post("/signUp", userSignUp);
