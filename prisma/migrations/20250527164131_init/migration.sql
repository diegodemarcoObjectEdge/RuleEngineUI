-- AlterTable
CREATE SEQUENCE "rules".rules_passenger_entrance_model_id_seq;
ALTER TABLE "rules"."rules_passenger_entrance_model" ALTER COLUMN "id" SET DEFAULT nextval('"rules".rules_passenger_entrance_model_id_seq');
ALTER SEQUENCE "rules".rules_passenger_entrance_model_id_seq OWNED BY "rules"."rules_passenger_entrance_model"."id";
