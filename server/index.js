import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ CORS must be applied before routes
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Server running ✅" });
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
