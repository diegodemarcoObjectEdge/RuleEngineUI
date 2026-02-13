/*
  Warnings:

  - A unique constraint covering the columns `[company_id,type]` on the table `rule_engine` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "rule_engine_company_id_type_key" ON "rules"."rule_engine"("company_id", "type");
