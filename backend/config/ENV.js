import dotenv from "dotenv"
dotenv.config()

export const  ENV ={
  mongodb_uri: process.env.MONGODB_URI,
  EMAIL:process.env.EMAIL,
  EMAIL_PASSWORD:process.env.EMAIL_PASSWORD,
  JWT_SECRET:process.env.JWT_SECRET
}