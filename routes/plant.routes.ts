import { Router } from "express";
import ctrl from "../controllers/plant.controller";

const router = Router();

router.get("/", (req, res) => res.redirect("/"));
router.get("/:id", ctrl.plant);

export default router;
