import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Foodbox = () => {
  return (
    <div className="flex flex-wrap w-full ">
     <Link to={"/fooddetail"}>
     <div
      className=" relative h-[30vh] w-[40vh] sm:w-[45vh] rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url("/src/components/Fooddetail/img/pizza.jpg")` }}
    >
      <div className="flex flex-col gap-1 p-2 bg-zinc-900 absolute opacity-75 bottom-0 w-full">
        <div className="flex justify-between">
            <h1>Pizza</h1>
            <FaRegStar className="cursor-pointer hover:bg-yellow-500 rounded-full" />
        </div>
        <h1>Hamro resturant</h1>
        <h1>price</h1>
      </div>
      </div>
      </Link> 
    </div>
    
    
  );
};

export default Foodbox;
