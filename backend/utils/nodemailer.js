import nodemailer from "nodemailer";
import { ENV } from "../config/env.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.EMAIL,
    pass: ENV.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (to, subject, text) => {
  try{
    await transporter.sendMail({
    from: ENV.EMAIL,
    to,
    subject,
    text,
  });
  }catch(error){
    console.log("Error sending email:", error);
     throw new Error("Failed to send email");
  }
  
};