/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/

-- DropTable
DROP TABLE IF EXISTS "user";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isQuizDone" BOOLEAN NOT NULL DEFAULT false, -- New column for quiz status

    CONSTRAINT "user_pkey" PRIMARY KEY ("email")
);
