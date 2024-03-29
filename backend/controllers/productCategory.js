
import mongoose from "mongoose";
import { Category } from "../models/categoryModel.js";


//get all category
export const getAllCategory=async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//post category to database
export const addCategory= async (req, res) => {
  try {
    if (!req.body.name || !req.body.image) {
      return res.status(400).send({
        message: "Send all files,Names and image",
      });
    }
    const newCategory = {
      name: req.body.name,
      image: req.body.image, // Save the path of the uploaded image
    };
    const category = await Category.create(newCategory);
    return res.status(201).send(category);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "error creating new category" });
  }
};

//get one category by id
export const getCategory= async (req, res) => {
  try {
    const { id } = req.params;
    // Check if the provided ID is a valid ObjectId
    //to prevent from "message": "Cast to ObjectId failed for value \"65df2ad44\" (type string) at path \"_id\" for model \"FoodCategory\""
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const singleCategory = await Category.findById(id);
    if (!singleCategory) {
      return res.status(404).json("Category not found");
    }
    return res.status(200).json(singleCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//put category by ID
export const editCategory= async (req, res) => {
  try {
    if (!req.body.name || !req.body.image) {
      return res.status(400).send({
        message: "Send all fields to edit the category",
      });
    }
    const { id } = req.params;
    const result = await Category.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json("Error updating category");
    }
    return res.status(200).send("Category updated successfully");
  } catch (error) {
    console.log(error);
  }
};

//delete category by id
export const deleteCategory= async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json("Error deleting category");
    }
    return res.status(200).send("Successfully category deleted ");
  } catch (error) {
    console.log(error);
  }
};

