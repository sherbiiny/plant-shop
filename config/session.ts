import MongoStore from "connect-mongo";
import session from "express-session";
import { UserType } from "../models/User";

declare module "express-session" {
  interface SessionData {
    user: UserType;
  }
}

export default session({
  secret: process.env.SESSION_SECRET!,
  saveUninitialized: true,
  resave: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_URI }),
});
