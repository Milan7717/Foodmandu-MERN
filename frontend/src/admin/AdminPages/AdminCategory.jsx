import React, { useEffect, useState } from "react";


import { useParams } from "react-router-dom";
import axios from "axios";
import Foodbox from "../../components/FoodDetail/Foodbox";
import Navbar from "../../components/Common/Navbar";

const AdminCategory = () => {
    const [category, setCategory] = useState([]);

    const { id } = useParams();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/detail/${id}`);
          setCategory(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <>
        <div className='bg-zinc-900 text-white font-["neo-montreal"] min-h-screen w-full'>
         <Navbar />
          <div className="pt-16 mx-10">
          <div className="flex flex-wrap w-full md:gap-10 gap-6 ">
            {category.map((data, index) => {
              return (
                <Foodbox
                  key={index}
                  name={data.name}
                  resturant={data.resturant}
                  image={data.image}
                  price={data.price}
                  id={data._id}
                />
              );
            })}
            </div> 
          </div>
        </div>
      </>
    );
}

export default AdminCategory