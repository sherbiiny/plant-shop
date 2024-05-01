import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import flash from "express-flash";
import sessionConnection from "./config/session";
import homeRouter from "./routes/home.routes";
import plantRouter from "./routes/plant.routes";
import authRouter from "./routes/auth.routes";
import cartRouter from "./routes/cart.routes";
import { ErrorHandler, notFoundHandler } from "./middlewares";

// Initialize express app
const app = express();

// DB & Session Connection
import "./config/db";
app.use(sessionConnection);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));
app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = {
    errors: req.flash("error"),
    success: req.flash("success"),
  };
  res.locals.session = req.session;
  next();
});

// Render static files
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("/", authRouter);
app.use("/", homeRouter);
app.use("/plants", plantRouter);
app.use("/cart", cartRouter);

// 404 Handler
app.use(notFoundHandler);

// Error Handler
app.use(ErrorHandler);

// Listen
let port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("Listening on: http://localhost:" + port)
);
