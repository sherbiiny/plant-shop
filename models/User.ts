import mongoose, { InferSchemaType, Types } from "mongoose";
import { compare, hash } from "bcrypt";

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

type UserType = InferSchemaType<typeof schema> & { _id: Types.ObjectId };
const User = mongoose.model("User", schema);

// TODO: Implement this
const validatePassword = (password: string, user: UserType) => {
  return compare(password, user.password);
};

const create = async (username: string, password: string) => {
  let hashedPassword = await hash(password, 10);
  return User.create({
    username,
    password: hashedPassword,
  });
};

const getByUsername = (username: string) => {
  return User.findOne({ username });
};

const getById = (id: Types.ObjectId) => {
  return User.findById(id);
};

export { create, getById, getByUsername, validatePassword, UserType };
