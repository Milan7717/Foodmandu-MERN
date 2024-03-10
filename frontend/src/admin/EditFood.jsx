import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import axios from "axios";

const EditFood = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [resturant, setResturant] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/category/food/${id}`
        );
        const categoryData = response.data;
      console.log(categoryData); 
      console.log(id); 
        setCategory(response.data);
        navigate("/fooddetail/:id")
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      price,
      resturant,
    };

    try {
      await axios.put(`http://localhost:3000/detail/food/${id}`, data);

      alert("Successfully added food");
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white font-["neo-montreal"]'>
      <Navbar />
      <div className="w-full min-h-screen  flex items-center justify-center pt-16 ">
        <form
          action=""
          className=" flex flex-col gap-6 items-center w-[90%] sm:w-[70%] md:w-[50%] p-4 sm:p-6 md:p-10 border-[1px] border-zinc-800 rounded-xl"
        >
          <h1 className=" md:my-10 my-4 capitalize tracking-wider text-3xl">
            Add The category of the food
          </h1>
          <div className=" flex flex-col gap-6">
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Name :</label>
              <input
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Resturant Name :</label>
              <input
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                type="text"
                value={resturant}
                name="resturant"
                onChange={(e) => setResturant(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Price :</label>
              <input
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
                type="number"
                min="0"
                value={price}
                name="resturant"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-6 text-lg">
              <label className="w-[50%]">Image :</label>
              <input
                type="file"
                value={image}
                accept="image/*"
                name="image"
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:scale-110 md:my-4 transition-all rounded-lg p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFood;
