import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
});

const Plant = mongoose.model("plant", schema);

export const get = async (search: string) => {
  let rgx = RegExp(search, "i");

  // Search by name or description
  let find = {
    $or: [{ name: rgx }, { description: rgx }],
  };

  let plants = await Plant.find(find);
  return plants;
};

export const getOne = async (id: string) => {
  let plant = await Plant.findById(id);
  return plant;
};
