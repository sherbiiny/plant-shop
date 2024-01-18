import { check } from "express-validator";

const login = [
  check("username").notEmpty(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const register = [...login];

export default { login, register };
