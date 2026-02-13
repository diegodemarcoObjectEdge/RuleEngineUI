/*
  Warnings:

  - You are about to drop the column `subtype` on the `tag` table. All the data in the column will be lost.
  - Added the required column `subType` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rules"."tag" DROP COLUMN "subtype",
ADD COLUMN     "subType" TEXT NOT NULL;
