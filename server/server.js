import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ProductRouter from "./Routes/ProductRouter.js";
import addressRouter from "./Routes/AddressRouter.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// ✅ Serve uploads folder to access images
app.use("/uploads", express.static("uploads"));

// ✅ API routes
app.use("/api/products", ProductRouter);
app.use("/api/address", addressRouter);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.listen(4000, () => console.log("🚀 Server running on port 4000"));
