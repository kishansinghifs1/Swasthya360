import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ================= CREATE Vaccination Report =================
export const createVaccinationReport = async (req, res) => {
  try {
    const { vaccineName, description, type, dateAdministered } = req.body;

    if (!vaccineName) {
      return res.status(400).json({ message: "vaccineName is required." });
    }
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const report = await prisma.VaccinationReport.create({
      data: {
        vaccineName,
        description,
        type,
        dateAdministered: dateAdministered ? new Date(dateAdministered) : null,
        userId: req.userId,
      },
    });

    res.status(201).json({ report });
  } catch (error) {
    console.error("CreateVaccinationReport Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
// ================= GET all Vaccination Reports of logged-in user =================
export const getVaccinationReports = async (req, res) => {
  try {
    const reports = await prisma.VaccinationReport.findMany({
      where: { userId: req.userId },
      orderBy: { dateAdministered: "desc" },
    });
    res.status(200).json({ reports });
  } catch (error) {
    console.error("GetVaccinationReports Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};