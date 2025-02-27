// @ts-nocheck
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8001;

const dbURL = process.env.DB_URL;

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.log(err.message));
