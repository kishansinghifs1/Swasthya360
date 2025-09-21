import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// ========================== SIGNUP ==========================
export const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required." });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set token in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      sameSite: "strict",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// ========================== LOGIN ==========================
export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required." });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set token in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// ========================== UPDATE USER ==========================

export const updateUserController = async (req, res) => {
  try {
    const userId = req.userId; // Set by authMiddleware
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const {
      name,
      email,
      password,
      age,
      phone,
      gender,
      location,
      emergencyContact,
      preferredLanguage,
      medicalCondition,
      allergies,
      currentMedication,
      medicalConditions,
    } = req.body;

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);
    if (age !== undefined) updateData.age = age;
    if (phone !== undefined) updateData.phone = phone; // BigInt okay in Prisma
    if (gender) updateData.gender = gender;
    if (location) updateData.location = location;
    if (emergencyContact) updateData.emergencyContact = emergencyContact;
    if (preferredLanguage) updateData.preferredLanguage = preferredLanguage;
    if (medicalCondition) updateData.medicalCondition = medicalCondition;
    if (allergies) updateData.allergies = allergies;
    if (currentMedication) updateData.currentMedication = currentMedication;
    if (medicalConditions) updateData.medicalConditions = medicalConditions;

    // Perform the update
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // Convert BigInt fields to string for JSON serialization
    const safeUser = {
      ...updatedUser,
      phone: updatedUser.phone?.toString(),
    };

    res.status(200).json({ user: safeUser });
  } catch (error) {
    console.error("UpdateUserController Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

