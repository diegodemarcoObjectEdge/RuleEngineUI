import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

interface FieldGroupRow {
  id: string;
  company_id: string;
  code: string;
  name: string;
  order: string;
  type: string;
}

interface FieldTypeRow {
  id: string;
  company_id: string;
  code: string;
  label: string;
  base_type: string;
  type_config: string;
  allowed_operators: string;
  is_array: string;
  created_at: string;
  updated_at: string;
}

function parseCSV(content: string): string[][] {
  // Parse CSV with quoted fields
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
          i++; // Skip next quote
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

async function seedFieldGroups() {
  console.log("🌱 Seeding FieldGroup table...");

  const csvPath = path.join(__dirname, "../field_group.csv");
  const content = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(content);

  // Skip header row
  const dataRows = rows.slice(1);

  for (const row of dataRows) {
    if (row.length < 6) continue;

    const [id, company_id, code, name, order, type] = row;

    try {
      await prisma.fieldGroup.upsert({
        where: { id: parseInt(id) },
        update: {
          code,
          name,
          order: parseInt(order),
          type,
        },
        create: {
          id: parseInt(id),
          companyId: parseInt(company_id),
          code,
          name,
          order: parseInt(order),
          type,
        },
      });
    } catch (error) {
      console.error(`Error seeding field group ${id}:`, error);
    }
  }

  console.log("✅ FieldGroup seeding completed");
}

async function seedFieldTypes() {
  console.log("🌱 Seeding FieldType table...");

  const csvPath = path.join(__dirname, "../field_type.csv");
  const content = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(content);

  // Skip header row
  const dataRows = rows.slice(1);

  for (const row of dataRows) {
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
        where: { id: parseInt(id) },
        update: {
          code,
          label,
          baseType: base_type,
          typeConfig: type_config,
          allowedOperators: allowed_operators,
          isArray: is_array === "True",
          updatedAt: new Date(updated_at),
        },
        create: {
          id: parseInt(id),
          companyId: parseInt(company_id),
          code,
          label,
          baseType: base_type,
          typeConfig: type_config,
          allowedOperators: allowed_operators,
          isArray: is_array === "True",
          createdAt: new Date(created_at),
          updatedAt: new Date(updated_at),
        },
      });
    } catch (error) {
      console.error(`Error seeding field type ${id}:`, error);
    }
  }

  console.log("✅ FieldType seeding completed");
}

async function main() {
  console.log("🚀 Starting database seed...");

  try {
    await seedFieldGroups();
    await seedFieldTypes();

    console.log("✨ Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
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
