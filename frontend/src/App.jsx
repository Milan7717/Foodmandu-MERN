import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/src/components/style.css";


import Home from "./pages/Home";
import FoodDetails from "./pages/FoodDetails";
import Category from "./pages/Category";
import Addcategory from "./admin/Add/Addcategory";
import AddFood from "./admin/Add/AddFood";
import Login from "./admin/Login";
import Signup from "./admin/Signup";
import EditCategory from "./admin/Edit/EditCategory";
import EditFood from "./admin/Edit/EditFood";

import DeleteFood from "./admin/Delete/DeleteFood";
import DeleteCategory from "./admin/Delete/DeleteCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/fooddetail/:id" element={<FoodDetails />} />

        <Route path="/addcategory" element={<Addcategory />} />
        <Route path="/addfood" element={<AddFood />} />

        <Route path="/editcategory/:id" element={<EditCategory />} />
        <Route path="/editfood/:id" element={<EditFood />} />

        <Route path="/deletecategory/:id" element={<DeleteCategory />} />
        <Route path="/deletefood/:id" element={<DeleteFood />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
