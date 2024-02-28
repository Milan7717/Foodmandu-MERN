import mongoose from "mongoose";

//create a schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//export name, mongoosle db name
export const Category = mongoose.model("FoodCategory", categorySchema);
