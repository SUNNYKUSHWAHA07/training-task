import express from "express";
import { registerUser, loginUser, getProfile, verifyEmail } from "../controllers/auth.controller.js";
import { protectRoute } from "../middelwares/auth.middelware.js";

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Email verification route
router.get("/verify-email/:token", verifyEmail);

// Profile route 
router.get("/profile", protectRoute, getProfile);



export default router;
