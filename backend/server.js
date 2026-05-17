import express from "express"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import { ENV } from "./config/ENV.js";
import cors from 'cors'

const app = express()

await connectDB();





app.use(cors({
  origin:ENV.FRONTEND_URL 
}));
app.use(express.json())

console.log(ENV.FRONTEND_URL);

app.use("/api/auth", authRoutes)
app.get("/api",(req,res)=>{
  res.send("Helllo")

})

app.listen(4000,()=>{
  console.log("server started")
})