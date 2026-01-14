/*
  Warnings:

  - Added the required column `content` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "is_read" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "PricePropostion" (
    "id" SERIAL NOT NULL,
    "chat_conversation_id" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "price" DECIMAL(10,2) NOT NULL,
    "status" VARCHAR(60) NOT NULL DEFAULT 'Oczekuje na odpowiedź',

    CONSTRAINT "PricePropostion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingPropostion" (
    "id" SERIAL NOT NULL,
    "chat_conversation_id" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "meeting_date" TIMESTAMP(3) NOT NULL,
    "meeting_time" VARCHAR(10) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "status" VARCHAR(60) NOT NULL DEFAULT 'Oczekuje na odpowiedź',

    CONSTRAINT "MeetingPropostion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PricePropostion" ADD CONSTRAINT "PricePropostion_chat_conversation_id_fkey" FOREIGN KEY ("chat_conversation_id") REFERENCES "chat_conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricePropostion" ADD CONSTRAINT "PricePropostion_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingPropostion" ADD CONSTRAINT "MeetingPropostion_chat_conversation_id_fkey" FOREIGN KEY ("chat_conversation_id") REFERENCES "chat_conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingPropostion" ADD CONSTRAINT "MeetingPropostion_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
