import { check } from "express-validator";
import { validationErrorHandler } from "./validationErrorHandler";

const login = [
  check("username").trim().notEmpty().withMessage("Please enter your username"),
  check("password").trim().notEmpty().withMessage("Please enter your password"),
  validationErrorHandler,
];

const register = [
  check("username").trim().notEmpty().withMessage("Please enter your username"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  validationErrorHandler,
];

export default { login, register };
