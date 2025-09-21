/*
  Warnings:

  - You are about to drop the column `notes` on the `VaccinationReport` table. All the data in the column will be lost.
  - You are about to drop the `MedicalCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `allergies` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `VaccinationReport` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."VaccineType" AS ENUM ('Compulsory', 'Optional');

-- DropForeignKey
ALTER TABLE "public"."MedicalCondition" DROP CONSTRAINT "MedicalCondition_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."allergies" DROP CONSTRAINT "allergies_userId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "allergies" TEXT,
ADD COLUMN     "medicalConditions" TEXT,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "currentMedication" DROP NOT NULL,
ALTER COLUMN "medicalCondition" DROP NOT NULL,
ALTER COLUMN "preferredLanguage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VaccinationReport" DROP COLUMN "notes",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "type" "public"."VaccineType",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "dateAdministered" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."MedicalCondition";

-- DropTable
DROP TABLE "public"."allergies";
