import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <Link to={"/category"}>
      <div className="transition-transform duration-300 transform scale-100 hover:scale-110 flex flex-col gap-4 w-[40%] bg-zinc-800 rounded-xl">
        <h1 className="text-2xl mt-2 text-center">Vegetarian Food</h1>
        <div className="">
          <img
            className=" rounded-lg object-center object-cover"
            src="/src/components/Category/img/pizza.jpg"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryList;
