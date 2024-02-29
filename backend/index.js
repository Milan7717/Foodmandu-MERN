import express from "express";
// import { PORT, mongo_URL } from "./config.js";
import mongoose from "mongoose";
import categoryRoute from "./routes/categoryRoute.js";
import Fooddetail from "./routes/detailRoute.js";
import dotenv from "dotenv"; // Import dotenv

dotenv.config();

import cors from "cors";

const app = express();

app.use(express.json());

//middleware for cors policy
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the ShoeShop home page");
});

app.listen(process.env.PORT, () => {
  console.log(`App is running in ${process.env.PORT}`);
});

//middleware for categoryRoute model
app.use("/category", categoryRoute);

//middleware for details route
app.use("/detail", Fooddetail);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("App connect to database");
  })
  .catch((error) => {
    console.log("error connecting database");
  });
