// controllers/user.controller.js
import { prisma } from "../config/prisma.config.js";

// ✅ Create User Controller
export const createUserController = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, password, phone, dateOfBirth, gender, address, pincode, city, state, emergencyContact } = req.body;

    // 1. Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }

    // 2. Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // 3. Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password, // ⚠️ in real apps, hash the password with bcrypt!
        phone,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        gender,
        address,
        pincode,
        city,
        state,
        emergencyContact
      }
    });

    // 4. Return success
    return res.status(201).json({
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
