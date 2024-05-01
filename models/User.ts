import mongoose, { InferSchemaType, Types } from "mongoose";
import { compare, hash } from "bcrypt";

const OrderItem = {
  plantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant'
  },
  quantity: Number
}

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [OrderItem]
});

type UserType = InferSchemaType<typeof schema> & { _id: Types.ObjectId };
const User = mongoose.model("User", schema);

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

const updateCart = async (userId: Types.ObjectId, plantId: Types.ObjectId) => {
  let user = await User.findById(userId);
  let itemPosition = user.cart.findIndex((orderItem) => orderItem.plantId == plantId);
  
  if(~itemPosition)
    user.cart[itemPosition].quantity++;
  else
    user.cart.push({plantId, quantity: 1});
  
    return user.save();
}

export { create, getById, getByUsername, validatePassword, UserType, updateCart };
