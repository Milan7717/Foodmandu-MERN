import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "/src/components/style.css";
import Category from "./components/Category/Category";
import FoodDetail from "./components/FoodDetail/FoodDetails";
import Login from "./pages/Login";
import Addcategory from "./admin/Addcategory";
import AddFood from "./admin/AddFood";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail" element={<FoodDetail />} />
        
        <Route path="/addcategory" element={<Addcategory />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
