import React from "react";
import Navbar from "../components/Common/Navbar";
const AddFood = () => {
  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white font-["neo-montreal"]'>
      <Navbar />
      <div className="w-full min-h-screen  flex items-center justify-center pt-16 ">
        <form
          action=""
          className=" flex flex-col gap-6 items-center w-[90%] p-4 border-[1px] border-zinc-800 rounded-lg"
        >
          <h1 className="capitalize tracking-wider text-3xl">
            Add The category of the food
          </h1>
          <div className=" flex flex-col gap-6">
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Name :</label>
              <input
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                type="text"
              />
            </div>
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Resturant Name :</label>
              <input
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                type="text"
              />
            </div>
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Price :</label>
              <input
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                type="number"
                min="0"
              />
            </div>
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Category :</label>

              <select
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                name="Category"
                id=""
              >
                <option className="bg-transparent text-black p-1" value="Veg">
                  Veg
                </option>
                <option
                  className="bg-transparent text-black p-1"
                  value="Non-veg"
                >
                  Non-veg
                </option>
              </select>
            </div>

            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Image :</label>
              <input type="file" />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:scale-110 transition-all rounded-lg p-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
