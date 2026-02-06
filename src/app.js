import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmat from "helmet";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmat({
    crossOriginEmbedderPolicy: false,
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the VintunaStore" });
});

export default app;