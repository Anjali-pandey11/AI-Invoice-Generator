// controllers/authController.js

import User from "../model/User.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { ENV } from "../ENV.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(email)

    // check empty fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generate otp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verifyOtp: otp,
      verifyOtpExpireAt: Date.now() + 10 * 60 * 1000,
    });

    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ENV.EMAIL,
        pass: ENV.EMAIL_PASSWORD,
      },
    });

    // send mail
    await transporter.sendMail({
      from: ENV.EMAIL,
      to: email,
      subject: "Verify Your Account",
      text: `Your OTP is ${otp}`,
    });

    res.status(201).json({
      success: true,
      message: "OTP sent to email",
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // check otp
    if (user.verifyOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // check expiry
    if (user.verifyOtpExpireAt < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    // verify user
    user.isVerified = true;
    user.verifyOtp = null;
    user.verifyOtpExpireAt = null;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};