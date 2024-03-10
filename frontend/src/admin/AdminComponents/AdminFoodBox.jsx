import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const AdminFoodBox = (props) => {
    return (
        <>
        <div className="flex flex-col gap-4 border-[1px] border-zinc-700 rounded-xl ">
        <Link to={`/fooddetail/${props.id}`}>
          <div
            className=" relative h-[30vh] w-[40vh] sm:w-[45vh] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            <div className="flex flex-col gap-1 p-2 bg-zinc-900 absolute opacity-75 bottom-0 w-full">
              <div className="flex justify-between">
                <h1>{props.name}</h1>
                <FaRegStar className="cursor-pointer hover:bg-yellow-500 rounded-full" />
              </div>
              <h1>{props.resturant}</h1>
              <h1>{props.price}</h1>
            </div>
            
          </div>
        </Link>
        <div className="flex justify-center m-4 gap-x-4">
        <Link className=" rounded-full p-2 bg-green-100" to={`/editfood/${props.id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600" />
        </Link>
        <Link className=" rounded-full p-2 bg-green-100" to={`/deletefood/${props.id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
      </div>
      </>
      );
}

export default AdminFoodBox