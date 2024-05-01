import { routeProtector } from "./../middlewares/routeProtector";
import { Router } from "express";
import ctrl from "../controllers/cart.controller";

const router = Router();

// All cart actions are auth protected
router.use(routeProtector);

/**
 * @desc render cart screen
 * @method GET
 */
router.get("/", ctrl.renderCart);
router.post("/add", ctrl.addToCart);

export default router;
