import { routeProtector } from "./../middlewares/routeProtector";
import { Router } from "express";
import ctrl from "../controllers/cart.controller";

const router = Router();

/**
 * @desc render cart screen
 * @method GET
 * @protected auth protected
 */
router.get("/", routeProtector, ctrl.renderCart);

export default router;
