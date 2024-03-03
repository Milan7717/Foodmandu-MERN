import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const CategoryList = (props) => {
  return (
    <div className="flex flex-col transition-transform duration-300 transform scale-100 hover:scale-110">
      <Link to={`/category/${props.id}`}>
        <div className="h-[30vh] w-[40vh] sm:w-[45vh]   flex flex-col gap-4  bg-zinc-800 rounded-xl">
          <h1 className="text-2xl mt-2 text-center">{props.name}</h1>
          <div className="">
            <img
              className=" rounded-lg object-center object-cover"
              src={props.image}
              alt=""
            />
          </div>

          <div className="p-2">
            <Link to={"/category/" + props.id}>
              <button
                type="button"
                className="btn mr-4 bg-blue-500 border-2 border-sky-400 text-lg rounded-lg p-1 my-2"
              >
                See More
              </button>
            </Link>
          </div>
        </div>
      </Link>

      <div className="flex justify-center gap-x-4">
        <Link to={`/editcategory/${props.id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600" />
        </Link>
        <Link to={`/deletecategory/${props.id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
