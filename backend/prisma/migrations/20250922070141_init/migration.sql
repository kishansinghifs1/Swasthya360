-- CreateEnum
CREATE TYPE "public"."VaccineType" AS ENUM ('Compulsory', 'Optional');

-- CreateEnum
CREATE TYPE "public"."Sender" AS ENUM ('USER', 'AGENT');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER,
    "phone" BIGINT,
    "gender" TEXT,
    "location" TEXT,
    "emergencyContact" TEXT,
    "preferredLanguage" TEXT DEFAULT 'English',
    "medicalCondition" TEXT,
    "allergies" TEXT,
    "currentMedication" TEXT,
    "medicalConditions" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChatHistory" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sender" "public"."Sender" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChatHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VaccinationReport" (
    "id" TEXT NOT NULL,
    "vaccineName" TEXT NOT NULL,
    "description" TEXT,
    "type" "public"."VaccineType",
    "dateAdministered" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VaccinationReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."ChatHistory" ADD CONSTRAINT "ChatHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VaccinationReport" ADD CONSTRAINT "VaccinationReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
