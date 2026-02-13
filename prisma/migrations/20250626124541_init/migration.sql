/*
  Warnings:

  - You are about to drop the `rules_passenger_entrance_model` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "rules"."rules_passenger_entrance_model";

-- CreateTable
CREATE TABLE "rules"."rule_engine" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "rule_engine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."rule_engine_model" (
    "id" SERIAL NOT NULL,
    "rule_engine_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "model" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "rule_engine_model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."rule_engine_decision" (
    "id" SERIAL NOT NULL,
    "rule_engine_model_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "input" JSONB NOT NULL,
    "decision" JSONB NOT NULL DEFAULT '{}',
    "error" JSONB NOT NULL,

    CONSTRAINT "rule_engine_decision_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "rule_engine_company_id_idx" ON "rules"."rule_engine"("company_id");

-- AddForeignKey
ALTER TABLE "rules"."rule_engine_model" ADD CONSTRAINT "rule_engine_model_rule_engine_id_fkey" FOREIGN KEY ("rule_engine_id") REFERENCES "rules"."rule_engine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."rule_engine_decision" ADD CONSTRAINT "rule_engine_decision_rule_engine_model_id_fkey" FOREIGN KEY ("rule_engine_model_id") REFERENCES "rules"."rule_engine_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
