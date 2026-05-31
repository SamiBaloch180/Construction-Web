import { Router, type IRouter } from "express";
import { db, servicesTable } from "@workspace/db";
import { ListServicesResponse } from "@workspace/api-zod";
import { mockServices } from "../lib/mock-data";

const router: IRouter = Router();

router.get("/services", async (_req, res): Promise<void> => {
  if (!db) {
    res.json(ListServicesResponse.parse(mockServices));
    return;
  }
  const services = await db.select().from(servicesTable);
  res.json(ListServicesResponse.parse(services));
});

export default router;
