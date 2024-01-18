import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { User } from "../models";
import { ErrorFormatter } from "../helpers";

const renderLogin: RequestHandler = (req, res) => res.render("screens/Login");

const renderRegister: RequestHandler = (req, res) =>
  res.render("screens/Register");

const login: RequestHandler = asyncHandler(async (req, res) => {
  let { username, password } = req.body;

  let user = await User.getByUsername(username);
  if (!user) throw new ErrorFormatter("This username is not registerd!", 401);

  let isMatch = await User.validatePassword(password, user);
  if (!isMatch) {
    throw new ErrorFormatter("Wrong credintials!", 401);
  }

  req.session.user = user;
  res.redirect("/");
});

const register: RequestHandler = asyncHandler(async (req, res) => {
  let user = await User.getByUsername(req.body.username);
  if (user) throw new ErrorFormatter("This username is already taken!", 401);

  user = await User.create(req.body.username, req.body.password);
  req.session.user = user;

  res.redirect("/");
});

const logout = asyncHandler(async (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;
    res.redirect("/");
  });
});

export default { login, register, renderLogin, renderRegister, logout };
