import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ================= CREATE Vaccination Report =================
export const createVaccinationReport = async (req, res) => {
  try {
    const { vaccineName, description, type, dateAdministered } = req.body;

    if (!vaccineName) {
      return res.status(400).json({ message: "vaccineName is required." });
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

// ================= UPDATE Vaccination Report =================
export const updateVaccinationReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { vaccineName, description, type, dateAdministered } = req.body;

    const existingReport = await prisma.VaccinationReport.findUnique({ where: { id } });
    if (!existingReport) {
      return res.status(404).json({ message: "Vaccination report not found." });
    }
    if (existingReport.userId !== req.userId) {
      return res.status(403).json({ message: "Forbidden: You cannot update this report." });
    }

    const updateData = {};
    if (vaccineName) updateData.vaccineName = vaccineName;
    if (description) updateData.description = description;
    if (type) updateData.type = type;
    if (dateAdministered) updateData.dateAdministered = new Date(dateAdministered);

    const updatedReport = await prisma.VaccinationReport.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json({ report: updatedReport });
  } catch (error) {
    console.error("UpdateVaccinationReport Error:", error);
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
