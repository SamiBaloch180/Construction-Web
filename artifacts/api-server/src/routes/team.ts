import { Router, type IRouter } from "express";
import { db, teamTable } from "@workspace/db";
import { ListTeamResponse } from "@workspace/api-zod";
import { mockTeam } from "../lib/mock-data";

const router: IRouter = Router();

router.get("/team", async (_req, res): Promise<void> => {
  if (!db) {
    res.json(ListTeamResponse.parse(mockTeam));
    return;
  }
  const members = await db.select().from(teamTable);
  res.json(ListTeamResponse.parse(members));
});

export default router;
