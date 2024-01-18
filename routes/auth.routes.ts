import { Router } from "express";
import ctrl from "../controllers/auth.controller";
import validator from "../validators/auth.validator";

const router = Router();

/**
 * @desc Render login and register page
 * @method GET
 */
router.get("/login", ctrl.renderLogin);
router.get("/register", ctrl.renderRegister);

/**
 * @desc Login
 * @method POST
 * @body username, password
 */
router.post("/login", validator.login, ctrl.login);

/**
 * @desc Register
 * @method POST
 * @body username, password
 */
router.post("/register", validator.register, ctrl.register);

/**
 * @desc Logout
 * @method GET
 */
router.get("/logout", ctrl.logout);

export default router;
