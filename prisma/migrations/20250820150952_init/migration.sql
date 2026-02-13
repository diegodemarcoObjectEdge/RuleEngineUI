-- AlterTable
ALTER TABLE "rules"."rule_engine_decision" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "rules"."rule_engine_decision" ADD CONSTRAINT "rule_engine_decision_rule_engine_model_id_fkey" FOREIGN KEY ("rule_engine_model_id") REFERENCES "rules"."rule_engine_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
