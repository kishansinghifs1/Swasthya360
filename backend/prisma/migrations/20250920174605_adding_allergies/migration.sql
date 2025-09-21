/*
  Warnings:

  - You are about to drop the column `allergies` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "allergies",
DROP COLUMN "location";

-- CreateTable
CREATE TABLE "public"."allergies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "allergies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."allergies" ADD CONSTRAINT "allergies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
