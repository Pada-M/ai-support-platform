import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.js"; // we'll use this for login/register

// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express app
const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(express.json());

// ✅ Allow requests from your Next.js frontend (localhost:3000)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "Server running ✅" });
});

app.use("/api/auth", authRoutes); // Register/Login routes

// ✅ Start the server
const PORT = 5050;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
