import express from "express";
import { Details } from "../models/detailModel.js";
import { Category } from "../models/categoryModel.js";

const router = express.Router();

//get all the food list with detail of a certain category
router.get("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const fooddetails = await Details.find({ category: categoryId });
    return res.status(200).send(fooddetails);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

//post the details to that category
router.post("/food/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const categoryExist = await Category.findById(categoryId);
    if (!categoryExist) {
      return res.status(404).json({ message: "category not found" });
    }
    if (
      !req.body.name ||
      !req.body.resturant ||
      !req.body.price ||
      !req.body.image
    ) {
      return res.status(404).send("Please fill all data");
    }
    const newFoodDetail = {
      category: categoryId,
      name: req.body.name,
      resturant: req.body.resturant,
      price: req.body.price,
      image: req.body.image,
    };

    const FoodDetail = await Details.create(newFoodDetail);
    return res.status(201).send(FoodDetail);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error adding food details", error: error.message });
  }
});

//get one food details
router.get("/food/:foodId", async (req, res) => {
  try {
    const { foodId } = req.params;
    const fooddetails = await Details.findById(foodId);
    return res.status(200).json(fooddetails);
  } catch (error) {
    console.log(error);
  }
});

//put one food details
router.put("/food/:foodId", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.resturant ||
      !req.body.price ||
      !req.body.image
    ) {
      return res.status(404).send("Please fill all data");
    }
    const { foodId } = req.params;
    const fooddetail = await Details.findByIdAndUpdate(foodId, req.body);
    if (!fooddetail) {
      return res.status(404).json("Food details not found");
    }

    return res.status(200).json("successfully edited");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "error editing", error: error.message });
  }
});
//delete one food details
//put one food details
router.delete("/food/:foodId", async (req, res) => {
  try {
    const { foodId } = req.params;
    const fooddetail = await Details.findByIdAndDelete(foodId);
    if (!fooddetail) {
      return res.status(404).json("Food details not found");
    }

    return res.status(200).json("Successfully deleted");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "error deleting", error: error.message });
  }
});

export default router;
