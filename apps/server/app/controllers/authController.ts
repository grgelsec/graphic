import express, { request, response } from "express";
import type { Request, Response } from "express";
import { signUp } from "@graphic/services/supabase.js";
import type { AuthResponse } from "@supabase/supabase-js";

export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required",
      });
    }

    const data: AuthResponse = await signUp(email, password);

    if (data.error) {
      return res.status(400).json({
        sucesss: false,
        error: data.error.message,
      });
    }

    res.status(200).json({ success: true, data: data.data });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
