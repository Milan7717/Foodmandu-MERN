import React from "react";
import Navbar from "../Common/Navbar";
import SingleDetail from "./SingleDetail";


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
