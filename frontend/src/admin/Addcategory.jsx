import React, { useState } from "react";
import Navbar from "../components/Common/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcategory = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
 

// Handle file input change
const handleFileChange = (e) => {
  setImage(e.target.files[0]); // Get the first file from the array
};

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create FormData object to send files
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:3000/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set proper content type
        },
      });
      alert("Successfully category added");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error adding category");
    }
  };



  return (
    <div className='min-h-screen text-lg w-full bg-zinc-900 text-white font-["neo-montreal"]'>
      <Navbar />
      <div className="w-full min-h-screen  flex items-center justify-center pt-16 ">
        <form
          action=""
          className=" flex flex-col gap-6 items-center w-[90%] sm:w-[70%] md:w-[50%] p-4 sm:p-6 md:p-10 border-[1px] border-zinc-800 rounded-xl"
        >
          <h1 className="capitalize tracking-wider md:my-10 my-4 text-3xl">
            Add The category of the food
          </h1>
          <div className=" flex flex-col gap-6">
          <div className="flex gap-6">
              <label className="w-[50%]">Name of category :</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name of the shoe category"
                required
                className="bg-transparent outline-none border-[1px] border-zinc-800 rounded-lg p-1"
              />
            </div>

            <div className="flex gap-6">
              <label className="w-[50%]">Image :</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleFileChange} // Changed to handleFileChange
                required
              />
            </div>
           
          </div>
          <button
            onClick={handleSubmit}
            className="md:my-4 bg-blue-500 hover:scale-110 transition-all rounded-lg p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcategory;
