# Rule Engine UI

This is a standalone component for the Rule Engine UI.

## Installation

Install dependencies:

```bash
yarn install
```

## Database Setup (PostgreSQL)

1. Copy `.env.example` to `.env`.
2. Update `DATABASE_URL` for your local Postgres instance.
3. Create/apply schema and generate Prisma client:

```bash
yarn db:setup
```

4. Seed base data:

```bash
yarn db:seed
```

The default sample URL uses its own DB and schema pattern:

`postgresql://postgres:postgres@localhost:5432/rule_engine_ui?schema=rule_engine_ui`

## Run

```bash
yarn dev
```
