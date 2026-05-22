import User from "../model/User.js";
import bcrypt from "bcryptjs";
import { ENV } from "../config/ENV.js";
import { sendEmail } from "../utils/nodemailer.js";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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

    await sendEmail(user.email, "Verify Your Account", `Your OTP is ${otp}`);

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

    // check expiry
    if (user.verifyOtpExpireAt < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    // check otp
    if (user.verifyOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // verify user
    user.isVerified = true;
    user.verifyOtp = null;
    user.verifyOtpExpireAt = null;

    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      token,
      user:user.name,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const LoginUser = async (req, res) => {
  try {
    //  Get email and password from frontend
    const { email, password } = req.body;

    // Find user in database
    const user = await User.findOne({ email });

    //  Check user exists or not
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    //  Wrong password
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    //  Check email verified or not
    if (!user.isVerified) {
      // generate otp
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      // save otp
      user.verifyOtp = otp;

      user.verifyOtpExpireAt = Date.now() + 5 * 60 * 1000;

      await user.save();

      // send email

      await sendEmail(user.email, "Verify Your Account", `Your OTP is ${otp}`);

      return res.status(403).json({
        success: false,
        message: "Account not verified. OTP sent to email.",
      });
    }

    //  Generate JWT token
    const token = generateToken(user._id);

    //Send response
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user:user.name
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
