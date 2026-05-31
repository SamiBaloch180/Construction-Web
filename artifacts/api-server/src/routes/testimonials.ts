import { Router, type IRouter } from "express";
import { db, testimonialsTable } from "@workspace/db";
import { ListTestimonialsResponse } from "@workspace/api-zod";
import { mockTestimonials } from "../lib/mock-data";

const router: IRouter = Router();

router.get("/testimonials", async (_req, res): Promise<void> => {
  if (!db) {
    res.json(ListTestimonialsResponse.parse(mockTestimonials));
    return;
  }
  const testimonials = await db
    .select()
    .from(testimonialsTable)
    .orderBy(testimonialsTable.createdAt);
  res.json(ListTestimonialsResponse.parse(testimonials));
});

export default router;
