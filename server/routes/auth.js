import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Business } from "../models/Business.js";

const router = express.Router();

// 🧠 Register a new business
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if already exists
    const existing = await Business.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Save new business
    const newBusiness = await Business.create({ name, email, password: hashed });

    res.status(201).json({
      message: "Business registered successfully",
      business: {
        id: newBusiness._id,
        name: newBusiness.name,
        email: newBusiness.email,
      },
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔑 Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const business = await Business.findOne({ email });
    if (!business) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, business.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: business._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      business: {
        id: business._id,
        name: business.name,
        email: business.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
