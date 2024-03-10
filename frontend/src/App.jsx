import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/src/components/style.css";

import Cart from "./pages/Cart";
import Home from './pages/Home';
import Category from './pages/Category';
import FoodDetails from './pages/FoodDetails';
import Addcategory from './admin/Addcategory';
import AddFood from './admin/AddFood';
import EditCategory from './admin/EditCategory';
import EditFood from './admin/EditFood';
import DeleteCategory from './admin/DeleteCategory';
import DeleteFood from './admin/DeleteFood';
import Signup from "./pages/Signup";
import Login from './pages/Login';
import AdminHome from "./admin/AdminPages/AdminHome";
import AdminCategory from "./admin/AdminPages/AdminCategory";
import AdminFooddetails from "./admin/AdminPages/AdminFooddetails";
import OrderList from "./admin/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/fooddetail/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        

        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/admincategory/:id" element={<AdminCategory />} />
        <Route path="/adminfoodetails/:id" element={<AdminFooddetails />} />
        <Route path="/orderlist" element={<OrderList />} />



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
