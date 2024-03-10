import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import SingleDetail from "../components/SingleFoodDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodDetails = () => {
  const [foodData, setFoodData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/detail/food/${id}`
        );
        setFoodData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className='bg-zinc-900 text-white font-["neo-montreal"] min-h-screen w-full '>
      <Navbar />
      <div>
        <SingleDetail
          name={foodData.name}
          resturant={foodData.resturant}
          price={foodData.price}
          image={foodData.image}
          id={foodData._id}
        />
      </div>
    </div>
  );
};

export default FoodDetails;
