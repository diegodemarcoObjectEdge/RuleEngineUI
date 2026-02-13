import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

function parseCSV(content: string): string[][] {
  const lines = content.trim().split("\n");
  const result: string[][] = [];

  for (const line of lines) {
    const row: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        row.push(current);
        current = "";
      } else {
        current += char;
      }
    }

    row.push(current);
    result.push(row);
  }

  return result;
}

function getCsvRows(fileName: string): string[][] {
  const resourcePath = path.join(__dirname, `../resources/${fileName}`);
  const fallbackPath = path.join(__dirname, `../${fileName}`);
  const csvPath = fs.existsSync(resourcePath) ? resourcePath : fallbackPath;
  const content = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(content);

  return rows.slice(1);
}

function asNullable(value: string | undefined): string | null {
  if (value == null) return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.toUpperCase() === "NULL") return null;
  return trimmed;
}

function asOptionalInt(value: string | undefined): number | null {
  const normalized = asNullable(value);
  if (normalized == null) return null;
  const parsed = parseInt(normalized, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function asBool(value: string | undefined): boolean {
  const normalized = asNullable(value)?.toLowerCase();
  return normalized === "true" || normalized === "1";
}

function asDate(value: string | undefined): Date {
  const normalized = asNullable(value);
  return normalized ? new Date(normalized) : new Date();
}

async function seedCompanies() {
  console.log("Seeding company table...");
  const rows = getCsvRows("company.csv");

  for (const row of rows) {
    if (row.length < 18) continue;

    const [
      id,
      name,
      short_name,
      code,
      status,
      created_at,
      updated_at,
      service_url,
      agent_app_url,
      dark_background_logo_url,
      light_background_logo_url,
      logomark_url,
      egate_reentry_window_minutes,
      reentry_window_minutes,
      reentry_window_type,
      reports_deduping_window_minutes,
      partner_company_group_id,
      place_policy,
    ] = row;

    try {
      await prisma.company.upsert({
        where: { id: parseInt(id, 10) },
        update: {
          name,
          shortName: asNullable(short_name),
          code,
          status,
          createdAt: asDate(created_at),
          updatedAt: asDate(updated_at),
          serviceUrl: asNullable(service_url),
          agentAppUrl: asNullable(agent_app_url),
          darkBackgroundLogoUrl: asNullable(dark_background_logo_url),
          lightBackgroundLogoUrl: asNullable(light_background_logo_url),
          logomarkUrl: asNullable(logomark_url),
          egateReentryWindowMinutes: asOptionalInt(egate_reentry_window_minutes),
          reentryWindowMinutes: asOptionalInt(reentry_window_minutes),
          reentryWindowType: asNullable(reentry_window_type),
          reportsDedupingWindowMinutes: asOptionalInt(reports_deduping_window_minutes),
          partnerCompanyGroupId: asOptionalInt(partner_company_group_id),
          placePolicy: asNullable(place_policy),
        },
        create: {
          id: parseInt(id, 10),
          name,
          shortName: asNullable(short_name),
          code,
          status,
          createdAt: asDate(created_at),
          updatedAt: asDate(updated_at),
          serviceUrl: asNullable(service_url),
          agentAppUrl: asNullable(agent_app_url),
          darkBackgroundLogoUrl: asNullable(dark_background_logo_url),
          lightBackgroundLogoUrl: asNullable(light_background_logo_url),
          logomarkUrl: asNullable(logomark_url),
          egateReentryWindowMinutes: asOptionalInt(egate_reentry_window_minutes),
          reentryWindowMinutes: asOptionalInt(reentry_window_minutes),
          reentryWindowType: asNullable(reentry_window_type),
          reportsDedupingWindowMinutes: asOptionalInt(reports_deduping_window_minutes),
          partnerCompanyGroupId: asOptionalInt(partner_company_group_id),
          placePolicy: asNullable(place_policy),
        },
      });
    } catch (error) {
      console.error(`Error seeding company ${id}:`, error);
    }
  }

  console.log("Company seeding completed");
}

async function seedFieldGroups() {
  console.log("Seeding field_group table...");
  const rows = getCsvRows("field_group.csv");

  for (const row of rows) {
    if (row.length < 6) continue;
    const [id, company_id, code, name, order, type] = row;

    try {
      await prisma.fieldGroup.upsert({
        where: { id: parseInt(id, 10) },
        update: {
          code,
          name,
          order: parseInt(order, 10),
          type,
        },
        create: {
          id: parseInt(id, 10),
          companyId: parseInt(company_id, 10),
          code,
          name,
          order: parseInt(order, 10),
          type,
        },
      });
    } catch (error) {
      console.error(`Error seeding field_group ${id}:`, error);
    }
  }

  console.log("FieldGroup seeding completed");
}

async function seedFieldTypes() {
  console.log("Seeding field_type table...");
  const rows = getCsvRows("field_type.csv");

  for (const row of rows) {
    if (row.length < 10) continue;

    const [
      id,
      company_id,
      code,
      label,
      base_type,
      type_config,
      allowed_operators,
      is_array,
      created_at,
      updated_at,
    ] = row;

    try {
      await prisma.fieldType.upsert({
        where: { id: parseInt(id, 10) },
        update: {
          code,
          label,
          baseType: base_type,
          typeConfig: type_config,
          allowedOperators: allowed_operators,
          isArray: asBool(is_array),
          updatedAt: asDate(updated_at),
        },
        create: {
          id: parseInt(id, 10),
          companyId: parseInt(company_id, 10),
          code,
          label,
          baseType: base_type,
          typeConfig: type_config,
          allowedOperators: allowed_operators,
          isArray: asBool(is_array),
          createdAt: asDate(created_at),
          updatedAt: asDate(updated_at),
        },
      });
    } catch (error) {
      console.error(`Error seeding field_type ${id}:`, error);
    }
  }

  console.log("FieldType seeding completed");
}

async function seedFields() {
  console.log("Seeding field table...");
  const rows = getCsvRows("field.csv");

  for (const row of rows) {
    if (row.length < 7) continue;
    const [id, company_id, field_group_id, field_type_id, name, fieldPath, order] = row;

    try {
      await prisma.field.upsert({
        where: { id: parseInt(id, 10) },
        update: {
          companyId: parseInt(company_id, 10),
          fieldGroupId: parseInt(field_group_id, 10),
          fieldTypeId: parseInt(field_type_id, 10),
          name,
          path: fieldPath,
          order: parseInt(order, 10),
        },
        create: {
          id: parseInt(id, 10),
          companyId: parseInt(company_id, 10),
          fieldGroupId: parseInt(field_group_id, 10),
          fieldTypeId: parseInt(field_type_id, 10),
          name,
          path: fieldPath,
          order: parseInt(order, 10),
        },
      });
    } catch (error) {
      console.error(`Error seeding field ${id}:`, error);
    }
  }

  console.log("Field seeding completed");
}

async function seedRuleEngines() {
  console.log("Seeding rule_engine table...");
  const rows = getCsvRows("rule_engine.csv");

  for (const row of rows) {
    if (row.length < 6) continue;
    const [id, company_id, created_at, name, type, current_model_id] = row;

    const currentModelId = asOptionalInt(current_model_id);
    const modelExists = currentModelId
      ? await prisma.ruleEngineModel.findUnique({ where: { id: currentModelId } })
      : null;

    try {
      await prisma.ruleEngine.upsert({
        where: { id: parseInt(id, 10) },
        update: {
          companyId: parseInt(company_id, 10),
          createdAt: asDate(created_at),
          name,
          type,
          currentModelId: modelExists?.id ?? null,
        },
        create: {
          id: parseInt(id, 10),
          companyId: parseInt(company_id, 10),
          createdAt: asDate(created_at),
          name,
          type,
          currentModelId: modelExists?.id ?? null,
        },
      });
    } catch (error) {
      console.error(`Error seeding rule_engine ${id}:`, error);
    }
  }

  console.log("RuleEngine seeding completed");
}

async function seedRuleEngineFields() {
  console.log("Seeding rule_engine_field table...");
  const rows = getCsvRows("rule_engine_field.csv");

  for (const row of rows) {
    if (row.length < 3) continue;
    const [id, rule_engine_id, field_id] = row;
    const ruleEngineId = parseInt(rule_engine_id, 10);
    const fieldId = parseInt(field_id, 10);

    try {
      await prisma.ruleEngineField.upsert({
        where: {
          ruleEngineId_fieldId: {
            ruleEngineId,
            fieldId,
          },
        },
        update: {
          id: parseInt(id, 10),
        },
        create: {
          id: parseInt(id, 10),
          ruleEngineId,
          fieldId,
        },
      });
    } catch (error) {
      console.error(`Error seeding rule_engine_field ${id}:`, error);
    }
  }

  console.log("RuleEngineField seeding completed");
}

async function main() {
  console.log("Starting database seed...");

  try {
    await seedCompanies();
    await seedFieldGroups();
    await seedFieldTypes();
    await seedFields();
    await seedRuleEngines();
    await seedRuleEngineFields();
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
