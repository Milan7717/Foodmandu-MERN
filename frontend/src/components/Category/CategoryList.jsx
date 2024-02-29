import React from "react";
import { Link } from "react-router-dom";

const CategoryList = (props) => {
  return (
    
      <Link to={`/category/${props.id}`}>
        <div className="h-[30vh] w-[40vh] sm:w-[45vh]  transition-transform duration-300 transform scale-100 hover:scale-110 flex flex-col gap-4  bg-zinc-800 rounded-xl">
          <h1 className="text-2xl mt-2 text-center">{props.name}</h1>
          <div className="">
            <img
              className=" rounded-lg object-center object-cover"
              src={props.image}
              alt=""
            />
          </div>
        </div>
      </Link>
    
  );
};

export default CategoryList;
