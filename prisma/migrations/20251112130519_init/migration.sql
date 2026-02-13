-- CreateIndex
CREATE INDEX "rule_engine_company_id_type_current_model_id_idx" ON "rules"."rule_engine"("company_id", "type", "current_model_id");
