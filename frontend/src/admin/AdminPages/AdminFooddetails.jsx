import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

import SingleDetail from "../../components/FoodDetail/SingleDetail";
import Navbar from "../../components/Common/Navbar";

const AdminFooddetails = () => {
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
        />
      </div>
    </div>
  );
};

export default AdminFooddetails;
