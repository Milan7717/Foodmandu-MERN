import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminCategoryList from "../AdminComponents/AdminCategoryList";
import axios from "axios";

const AdminHome = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/category");
        setCategoryList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    
    <div className="bg-black text-white p-20">
      <div className="flex flex-col gap-10">
      <Link to="/addcategory">Add category</Link>
      <Link to="/addfood">Add food</Link>
      </div>
     
      <div className=" min-h-screen w-full my-10">
          <h1 className="text-4xl md:text-5xl  my-6">Categories</h1>
          <div className="flex flex-wrap w-full md:gap-10 gap-6">
            {categoryList.map((categoryData, index) => {
              return (
                <AdminCategoryList
                  key={index}
                  name={categoryData.name}
                  image={categoryData.image}
                  id={categoryData._id}
                />
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default AdminHome;
