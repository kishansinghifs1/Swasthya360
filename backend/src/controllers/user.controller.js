// controllers/user.controller.js
import { prisma } from "../config/prisma.config.js";
import { hashPassword } from "../services/hashpassword.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// ✅ Create User Controller
export const createUserController = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, password, phone, gender, location, emergencyContact ,preferredLanguage, medicalCondition,} = req.body;

    
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }

    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }
    const hashPasswordd = await hashPassword(password);
    if(!hashPasswordd){
      return res.status(500).json({ error: "Error hashing password" });
    }

    // 3. Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password:hashPasswordd, 
        phone,
        // dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        gender,
        // address,
        preferredLanguage,
        medicalCondition,
        location,
        emergencyContact
      }
    });

    // 4. Return success
    return await res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    });

  } catch (error) {
    console.error("Error creating user:", error);

    if (error.code === "P2002") {
      // Prisma unique constraint error
      return res.status(409).json({ error: "Duplicate field: email must be unique" });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get User by Email
export const getUserByEmailController = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get User by ID
export const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 4. Send token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true for https
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};