import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { Plant } from "../models";

const plant: RequestHandler = asyncHandler(async (req, res, next) => {
  let plant = await Plant.getOne(req.params.id);
  res.render("screens/SinglePlant", { plant });
});

export default { plant };
