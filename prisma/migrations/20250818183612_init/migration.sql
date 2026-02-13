/*
  Warnings:

  - You are about to drop the column `created_at` on the `rule_engine_decision` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[current_model_id]` on the table `rule_engine` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "rules"."rule_engine_decision" DROP CONSTRAINT "rule_engine_decision_rule_engine_model_id_fkey";

-- AlterTable
ALTER TABLE "rules"."rule_engine" ADD COLUMN     "current_model_id" INTEGER;

-- AlterTable
ALTER TABLE "rules"."rule_engine_decision" DROP COLUMN "created_at";

-- CreateIndex
CREATE UNIQUE INDEX "rule_engine_current_model_id_key" ON "rules"."rule_engine"("current_model_id");

-- AddForeignKey
ALTER TABLE "rules"."rule_engine" ADD CONSTRAINT "rule_engine_current_model_id_fkey" FOREIGN KEY ("current_model_id") REFERENCES "rules"."rule_engine_model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
