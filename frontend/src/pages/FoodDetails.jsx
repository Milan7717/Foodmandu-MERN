import React from "react";
import Navbar from "../components/Common/Navbar";
import SingleDetail from "../components/FoodDetail/SingleDetail";

const FoodDetails = () => {
  return (
    <div className='bg-zinc-900 text-white font-["neo-montreal"] min-h-screen w-full '>
      <Navbar />
      <div>
        <SingleDetail />
      </div>
    </div>
  );
};

export default FoodDetails;
