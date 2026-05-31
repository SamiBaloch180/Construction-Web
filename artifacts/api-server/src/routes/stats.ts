import { Router, type IRouter } from "express";
import { GetStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/stats", async (_req, res): Promise<void> => {
  res.json(
    GetStatsResponse.parse({
      yearsExperience: 25,
      projectsCompleted: 847,
      teamSize: 120,
      countriesServed: 12,
    })
  );
});

export default router;
