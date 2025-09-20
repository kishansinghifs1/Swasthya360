

import { prisma } from "../config/prisma.config.js";
export const addAllergyController = async (req, res) => {
  try {
    const { userId, name } = req.body;

    if (!userId || !name) {
      return res.status(400).json({ error: "userId and allergy name are required" });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add allergy
    const allergy = await prisma.allergies.create({
      data: {
        name,
        userId,
      },
    });

    return res.status(201).json({
      message: "Allergy added successfully",
      allergy,
    });
  } catch (error) {
    console.error("Error adding allergy:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get all allergies for a user
export const getAllergiesController = async (req, res) => {
  try {
    const { userId } = req.params;

    const allergies = await prisma.allergies.findMany({
      where: { userId },
    });

    return res.status(200).json({ allergies });
  } catch (error) {
    console.error("Error fetching allergies:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};