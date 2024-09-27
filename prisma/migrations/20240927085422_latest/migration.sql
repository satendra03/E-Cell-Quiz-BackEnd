/*
  Warnings:

  - You are about to drop the column `isQuizDone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "isQuizDone",
ADD COLUMN     "completedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "User";
