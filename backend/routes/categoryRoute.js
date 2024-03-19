import express from "express";
import { addCategory, deleteCategory, editCategory, getAllCategory, getCategory } from "../controllers/productCategory.js";


const router =express.Router();

//get all category
router.get("/",getAllCategory);

//post category to database
router.post("/",addCategory);

//get one category by id
router.get("/:id",getCategory);

//put category by ID
router.put("/:id", editCategory);

//delete category by id
router.delete("/:id", deleteCategory);

export default router;
