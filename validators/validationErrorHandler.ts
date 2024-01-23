import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

export const validationErrorHandler = asyncHandler((req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) return next();
  throw new Error(
    errors
      .array()
      .map(e => e.msg)
      .join("\n")
  );
});
