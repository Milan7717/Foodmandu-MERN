import React from "react";
import Contact from "../Contact";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../Common/Footer";

const SingleDetail = (props) => {
  
  return (
    <>
      <div className="mx-6 md:mx-24 sm:text-lg md:text-xl">
        <div className="grid grid-cols-2 items-center justify-center pt-16 ">
          <div className="p-6 md:p-12 border-r-[1px] h-full border-zinc-500 mr-6 ">
            <img
              className="h-full w-full object-center object-cover rounded-xl"
              src={props.image}
              alt=""
            />
          </div>
          <div className="flex gap-4 md:gap-10 flex-col">
            <div className="flex gap-4">
              <p className="w-[30%]">Name :</p>
              <p className="">{props.name}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-[30%]">Resturant :</p>
              <p>{props.resturant}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-[30%]">Price :</p>
              <p>{props.price}</p>
            </div>
            {/* <div className="flex gap-4">
              <p className="w-[30%]">Category :</p>
              <p>{props.category}</p>
            </div> */}
            <div className="flex gap-4">
              <label className="w-[30%] " htmlFor="">
                Quantity :
              </label>
              <input
                className="bg-zinc-800 rounded-lg p-1 outline-none px-2"
                min="0"
                type="number"
              />
            </div>
            <div className="bg-blue-400 rounded-xl cursor-pointer hover:scale-110 transition-all flex justify-between p-2 w-[50%]">
              <p className="text-orange-800">Buy Now</p>
              <FaShoppingCart className="text-xl text-orange-800" />
            </div>
          </div>
          
        </div>
        <div className="border-[1px] border-zinc-500 w-full my-10"></div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default SingleDetail;
