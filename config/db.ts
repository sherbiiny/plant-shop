import mongoose from "mongoose";

let connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI!!);
    console.log("Connected to DB!");
  } catch (err) {
    console.log("Error connecting to DB: ", err);
  }
};

connectToDB();
