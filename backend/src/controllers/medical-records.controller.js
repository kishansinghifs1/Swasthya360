import { prisma } from "../config/prisma.config.js";

// ✅ Add Medical Condition
export const addMedicalConditionController = async (req, res) => {
  try {
    const { userId, name } = req.body;

    if (!userId || !name) {
      return res.status(400).json({ error: "userId and condition name are required" });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add medical condition
    const condition = await prisma.medicalCondition.create({
      data: {
        name,
        userId,
      },
    });

    return res.status(201).json({
      message: "Medical condition added successfully",
      condition,
    });
  } catch (error) {
    console.error("Error adding medical condition:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get all medical conditions for a user
export const getMedicalConditionsController = async (req, res) => {
  try {
    const { userId } = req.params;

    const conditions = await prisma.medicalCondition.findMany({
      where: { userId },
    });

    return res.status(200).json({ conditions });
  } catch (error) {
    console.error("Error fetching conditions:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
