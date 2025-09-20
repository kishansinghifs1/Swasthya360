import { prisma } from "../config/prisma.config.js";

// ✅ Add Vaccination Report
export const addVaccinationReportController = async (req, res) => {
  try {
    const { userId, vaccineName, dateAdministered, notes } = req.body;

    if (!userId || !vaccineName || !dateAdministered) {
      return res.status(400).json({ error: "userId, vaccineName and dateAdministered are required" });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add vaccination report
    const report = await prisma.vaccinationReport.create({
      data: {
        vaccineName,
        dateAdministered: new Date(dateAdministered),
        notes,
        userId,
      },
    });

    return res.status(201).json({
      message: "Vaccination report added successfully",
      report,
    });
  } catch (error) {
    console.error("Error adding vaccination report:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get all vaccination reports for a user
export const getVaccinationReportsController = async (req, res) => {
  try {
    const { userId } = req.params;

    const reports = await prisma.vaccinationReport.findMany({
      where: { userId },
      orderBy: { dateAdministered: "desc" }, // latest first
    });

    return res.status(200).json({ reports });
  } catch (error) {
    console.error("Error fetching vaccination reports:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
