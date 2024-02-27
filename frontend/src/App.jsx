import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/src/components/style.css";

import Home from "./pages/Home";
import FoodDetails from "./pages/FoodDetails";
import Category from "./pages/Category";
import Addcategory from "./admin/Addcategory";
import AddFood from "./admin/AddFood";
import Login from "./admin/Login";
import Signup from "./admin/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/fooddetail" element={<FoodDetails />} />

        <Route path="/addcategory" element={<Addcategory />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
