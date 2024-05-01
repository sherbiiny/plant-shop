import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";
import { User } from "../models"

const renderCart: RequestHandler = asyncHandler((req, res) => {
  res.render("screens/Cart");
});

const addToCart: RequestHandler = asyncHandler(async (req, res) => {
    await User.updateCart(req.session.user._id, req.body.id);
    req.flash('success', 'Added Successfully')
    res.redirect('back');
})

export default { renderCart, addToCart };
