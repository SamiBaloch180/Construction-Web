import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, projectsTable } from "@workspace/db";
import {
  ListProjectsQueryParams,
  ListProjectsResponse,
  GetProjectParams,
  GetProjectResponse,
} from "@workspace/api-zod";
import { mockProjects } from "../lib/mock-data";

const router: IRouter = Router();

router.get("/projects", async (req, res): Promise<void> => {
  const query = ListProjectsQueryParams.safeParse(req.query);
  if (!query.success) {
    res.status(400).json({ error: query.error.message });
    return;
  }

  if (!db) {
    const results = query.data.category
      ? mockProjects.filter((p) => p.category === query.data.category)
      : mockProjects;
    res.json(ListProjectsResponse.parse(results));
    return;
  }

  let results;
  if (query.data.category) {
    results = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.category, query.data.category))
      .orderBy(projectsTable.createdAt);
  } else {
    results = await db
      .select()
      .from(projectsTable)
      .orderBy(projectsTable.createdAt);
  }

  res.json(ListProjectsResponse.parse(results));
});

router.get("/projects/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetProjectParams.safeParse({ id: parseInt(raw, 10) });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  if (!db) {
    const project = mockProjects.find((p) => p.id === params.data.id);
    if (!project) {
      res.status(404).json({ error: "Project not found" });
      return;
    }
    res.json(GetProjectResponse.parse(project));
    return;
  }

  const [project] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.id, params.data.id));

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  res.json(GetProjectResponse.parse(project));
});

export default router;
