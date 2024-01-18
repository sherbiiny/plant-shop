import { Router } from "express";
import ctrl from "../controllers/home.controller";

const router = Router();

router.get("/", ctrl.home);

export default router;
