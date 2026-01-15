/*
  Warnings:

  - You are about to drop the column `owner_name` on the `offers` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "offers" DROP CONSTRAINT "offers_owner_name_fkey";

-- AlterTable
ALTER TABLE "offers" DROP COLUMN "owner_name",
ADD COLUMN     "owner_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
