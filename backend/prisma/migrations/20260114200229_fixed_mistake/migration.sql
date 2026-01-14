/*
  Warnings:

  - You are about to drop the column `userId` on the `chat_conversations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "chat_conversations" DROP CONSTRAINT "chat_conversations_userId_fkey";

-- AlterTable
ALTER TABLE "chat_conversations" DROP COLUMN "userId";
