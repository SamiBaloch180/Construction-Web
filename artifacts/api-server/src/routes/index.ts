import { Router, type IRouter } from "express";
import healthRouter from "./health";
import projectsRouter from "./projects";
import servicesRouter from "./services";
import contactRouter from "./contact";
import statsRouter from "./stats";
import testimonialsRouter from "./testimonials";
import teamRouter from "./team";

const router: IRouter = Router();

router.use(healthRouter);
router.use(projectsRouter);
router.use(servicesRouter);
router.use(contactRouter);
router.use(statsRouter);
router.use(testimonialsRouter);
router.use(teamRouter);

export default router;
