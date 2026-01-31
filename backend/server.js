import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import adminRoute from './routes/adminRoute.js'
import vendorRoute from './routes/venderRoute.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { cloudinaryConfig } from "./utils/cloudinaryConfig.js";

// Load environment variables
dotenv.config();
console.log("MONGO_URI Loaded:", process.env.MONGO_URI);

// App initialization
const App = express();
const port = process.env.PORT || 3000;

//  CORS must be added BEFORE routes and any middleware
const allowedOrigins = [
  'https://rent-a-rover-v1.vercel.app',
  'https://rent-a-rover-v2.vercel.app',  // ✅ Your production frontend
  'http://localhost:5173',
  'http://localhost:5174'               // ✅ Local dev
];
App.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // Enables the Access-Control-Allow-Credentials header
  })
);
// Middleware setup
App.use(express.json());
App.use(cookieParser());
App.use(cloudinaryConfig);  // Cloudinary config if needed

//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.error("Connection error:", error));
// Routes setup
App.use("/api/user", userRoute);
App.use("/api/auth", authRoute);
App.use("/api/admin", adminRoute);
App.use("/api/vendor", vendorRoute)

// Error handling middleware
App.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    succes: false,
    message,
    statusCode,
  });
});
App.listen(port, () => {
  console.log("server listening !");
});