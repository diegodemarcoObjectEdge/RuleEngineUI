import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { ZenEngine } from "@gorules/zen-engine";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { modelId, input } = req.body;

  if (!modelId || !input) {
    return res.status(400).json({ message: "Missing modelId or input" });
  }

  try {
    const ruleEngineModel = await prisma.ruleEngineModel.findUnique({
      where: { id: modelId },
    });

    if (!ruleEngineModel) {
      return res.status(404).json({ message: "Rule engine model not found" });
    }

    const engine = new ZenEngine();
    const decision = engine.createDecision(ruleEngineModel.model as any);
    const { result } = await decision.evaluate(input);

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error evaluating rule engine", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
