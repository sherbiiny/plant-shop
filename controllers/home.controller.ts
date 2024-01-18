import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { Plant } from "../models";

const home: RequestHandler = asyncHandler(async (req, res, next) => {
  let search = req.query.search as string;
  let plants = await Plant.get(search);
  res.render("index", { plants });
});

export default { home };
