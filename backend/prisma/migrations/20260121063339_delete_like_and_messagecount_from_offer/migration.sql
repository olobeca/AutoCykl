/*
  Warnings:

  - You are about to drop the column `likes` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `message_count` on the `offers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "offers" DROP COLUMN "likes",
DROP COLUMN "message_count";
