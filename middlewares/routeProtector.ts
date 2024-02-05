import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";
import { ErrorFormatter } from "../helpers";

export const routeProtector: RequestHandler = asyncHandler((req, res, next) => {
  if (!req.session.user) throw new ErrorFormatter("Unauthorized", 401);
  next();
});
