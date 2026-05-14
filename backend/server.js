import express from "express"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"

const app = express()

await connectDB();

app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(4000,()=>{
  console.log("server started")
})