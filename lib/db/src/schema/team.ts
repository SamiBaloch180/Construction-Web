import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const teamTable = pgTable("team", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio"),
  imageUrl: text("image_url"),
});

export const insertTeamSchema = createInsertSchema(teamTable).omit({ id: true });
export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type TeamMember = typeof teamTable.$inferSelect;
