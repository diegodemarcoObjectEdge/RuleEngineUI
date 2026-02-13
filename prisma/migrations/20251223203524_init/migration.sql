-- AlterTable
ALTER TABLE "rules"."rule" ADD COLUMN     "company_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "rules"."tag" ADD COLUMN     "company_id" INTEGER NOT NULL;
