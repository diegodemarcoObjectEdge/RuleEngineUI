-- CreateEnum
CREATE TYPE "rules"."RuleStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "rules"."FieldGroupType" AS ENUM ('INPUT', 'OUTPUT');

-- CreateEnum
CREATE TYPE "rules"."BaseFieldType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'DATETIME', 'PICKLIST');

-- AlterTable
ALTER TABLE "rules"."rule_engine_model" ADD COLUMN     "rule_engine_model_metadata_id" INTEGER;

-- CreateTable
CREATE TABLE "rules"."rule_engine_model_metadata" (
    "id" SERIAL NOT NULL,
    "metadata" JSONB,

    CONSTRAINT "rule_engine_model_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."tag_group" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "tag_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."tag" (
    "id" SERIAL NOT NULL,
    "tag_group_id" INTEGER NOT NULL,
    "status" "rules"."RuleStatus" NOT NULL DEFAULT 'ACTIVE',
    "name" TEXT NOT NULL,
    "greeting_message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "subtype" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."rule" (
    "id" SERIAL NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" "rules"."RuleStatus" NOT NULL DEFAULT 'ACTIVE',
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."field_group" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" "rules"."FieldGroupType" NOT NULL,

    CONSTRAINT "field_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."field_type" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "base_type" "rules"."BaseFieldType" NOT NULL,
    "type_config" JSONB NOT NULL,
    "allowed_operators" JSONB NOT NULL,
    "is_array" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "field_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."field" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "field_group_id" INTEGER NOT NULL,
    "field_type_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."rule_engine_field" (
    "id" SERIAL NOT NULL,
    "rule_engine_id" INTEGER NOT NULL,
    "field_id" INTEGER NOT NULL,

    CONSTRAINT "rule_engine_field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules"."rule_field_value" (
    "id" SERIAL NOT NULL,
    "rule_id" INTEGER NOT NULL,
    "field_id" INTEGER NOT NULL,
    "value" JSONB NOT NULL,

    CONSTRAINT "rule_field_value_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "field_type_company_id_code_key" ON "rules"."field_type"("company_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "field_field_group_id_name_key" ON "rules"."field"("field_group_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "rule_engine_field_rule_engine_id_field_id_key" ON "rules"."rule_engine_field"("rule_engine_id", "field_id");

-- AddForeignKey
ALTER TABLE "rules"."rule_engine_model" ADD CONSTRAINT "rule_engine_model_rule_engine_model_metadata_id_fkey" FOREIGN KEY ("rule_engine_model_metadata_id") REFERENCES "rules"."rule_engine_model_metadata"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."tag" ADD CONSTRAINT "tag_tag_group_id_fkey" FOREIGN KEY ("tag_group_id") REFERENCES "rules"."tag_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."rule" ADD CONSTRAINT "rule_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "rules"."tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."field" ADD CONSTRAINT "field_field_group_id_fkey" FOREIGN KEY ("field_group_id") REFERENCES "rules"."field_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."field" ADD CONSTRAINT "field_field_type_id_fkey" FOREIGN KEY ("field_type_id") REFERENCES "rules"."field_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."rule_engine_field" ADD CONSTRAINT "rule_engine_field_rule_engine_id_fkey" FOREIGN KEY ("rule_engine_id") REFERENCES "rules"."rule_engine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."rule_engine_field" ADD CONSTRAINT "rule_engine_field_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "rules"."field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."rule_field_value" ADD CONSTRAINT "rule_field_value_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "rules"."rule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules"."rule_field_value" ADD CONSTRAINT "rule_field_value_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "rules"."field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
