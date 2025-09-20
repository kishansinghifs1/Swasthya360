/*
  Warnings:

  - Made the column `currentMedication` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `medicalCondition` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `preferredLanguage` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "currentMedication" SET NOT NULL,
ALTER COLUMN "medicalCondition" SET NOT NULL,
ALTER COLUMN "preferredLanguage" SET NOT NULL,
ALTER COLUMN "preferredLanguage" SET DEFAULT 'English';

-- AlterTable
ALTER TABLE "public"."allergies" ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."MedicalCondition" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MedicalCondition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."MedicalCondition" ADD CONSTRAINT "MedicalCondition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
