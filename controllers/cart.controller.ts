import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";

const renderCart: RequestHandler = asyncHandler((req, res) => {
  res.render("screens/Cart");
});

export default { renderCart };
