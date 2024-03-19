import express from "express";
import { addFood, deleteFood, editFood, getAllFood, getFood } from "../controllers/productDetails.js";

const router = express.Router();

//get all the food list with detail of a certain category
router.get("/:categoryId",getAllFood);

//post the details to that category
router.post("/food/:categoryId",addFood);

//get one food details
router.get("/food/:foodId", getFood);

//put one food details
router.put("/food/:foodId",editFood);


//delete one food details
router.delete("/food/:foodId",deleteFood );

export default router;
