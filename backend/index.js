 import express from "express";
 import authRoutes from "./routes/auth.routes.js";
 import {protectRoute} from "./middelwares/auth.middelware.js";
 import { connectDB } from "./config/db.config.js";
 import cookieParser from "cookie-parser";
 import dotenv from "dotenv";
 import cors from "cors";
 const app = express();
 const PORT = 3000;

 

 app.use(express.json());
 app.use(cookieParser());
 app.use(express.urlencoded({extended: true}));

 dotenv.config();
 connectDB();


app.use(
  cors({
    origin: ["http://localhost:5174"],
    credentials: true
  })
);


 app.get("/", protectRoute, (req, res) => {
    res.send("Hello, World! Sunny");
 })

 app.use("/auth", authRoutes);


 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 })