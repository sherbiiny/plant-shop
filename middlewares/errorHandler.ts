import { ErrorRequestHandler, RequestHandler } from "express";
import { ErrorFormatter } from "../helpers";

export const notFoundHandler: RequestHandler = (req, res, next) => {
  next(new ErrorFormatter("Page not found!", 404));
};

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("\x1b[31mError: %s - %s\x1b[0m", err.statusCode, err.message);
  req.flash("error", err.message);

  // handle unauthorized
  if (err.statusCode === 401) return res.redirect("/login");

  res.redirect("back");
};
