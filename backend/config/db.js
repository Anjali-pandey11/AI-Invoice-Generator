

import mongoose from "mongoose";
import { ENV } from "../ENV.js";

const url = ENV.mongodb_uri;


const connectDB = async () => {
  try{
    await mongoose.connect(url)
    console.log("MongoDB connected")
    
  }catch(error){
    console.log(error)
  }
}

 export default connectDB