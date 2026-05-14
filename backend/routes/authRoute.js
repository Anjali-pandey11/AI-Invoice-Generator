// routes/authRoutes.js

import express from "express";
import {
  registerUser,
  verifyEmail,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);

export default router;