import express from "express";
import {
  LoginUser,
  registerUser,
  verifyEmail,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);
router.post("/login", LoginUser);

export default router;