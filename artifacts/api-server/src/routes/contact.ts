import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  if (db) {
    await db.insert(contactsTable).values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      projectType: parsed.data.projectType ?? null,
      message: parsed.data.message,
    });
  }

  res.json(
    SubmitContactResponse.parse({
      success: true,
      message: "Your message has been received. We'll be in touch within 24 hours.",
    })
  );
});

export default router;
