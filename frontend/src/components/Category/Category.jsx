import React from "react";
import Foodbox from "../FoodDetail/Foodbox";
import Navbar from "../Common/Navbar";

const Category = () => {
  return (
    <>
      <div className='bg-zinc-900 text-white font-["neo-montreal"] min-h-screen w-full'>
        <Navbar />
        <div className="pt-16 mx-10">
          <Foodbox />
        </div>
      </div>
    </>
  );
};

export default Category;
