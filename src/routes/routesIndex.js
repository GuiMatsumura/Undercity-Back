import { Router } from "express";
import testeRoute from "./testeRoute.js";

const router = Router();

router.use(testeRoute);

export default router;
