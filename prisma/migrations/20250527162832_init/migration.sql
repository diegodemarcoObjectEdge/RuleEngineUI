/*
  Warnings:

  - You are about to drop the `Dummy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "rules"."Dummy";

-- CreateTable
CREATE TABLE "rules"."rules_passenger_entrance_model" (
    "id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "model" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "rules_passenger_entrance_model_pkey" PRIMARY KEY ("id")
);
