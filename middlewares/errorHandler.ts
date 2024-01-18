import { ErrorRequestHandler, RequestHandler } from "express";
import { ErrorFormatter } from "../helpers";

export const notFoundHandler: RequestHandler = (req, res, next) => {
  next(new ErrorFormatter("Page not found!", 404));
};

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  req.flash("error", err.message);
  res.redirect("back");
};
