import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import Foodbox from "../components/FoodDetail/Foodbox";
import Contact from "../components/Contact";
import Footer from "../components/Common/Footer";
import CategoryList from "../components/Category/CategoryList";
import axios from "axios";

const Home = () => {
  //category list
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/category");
        setCategoryList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-zinc-900 text-white font-["neo-montreal"]'>
      <Navbar />

      {/* introduction part */}
      <div className="">
        <div
          className="relative flex justify-center items-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(/src/pages/img/backgroundimg.jpg)` }}
        >
          <div className="absolute top-1/4 right-5">
            <img
              className=" h-32 w-32 object-center object-cover mix-blend-multiply rounded-full"
              src="/src/pages/img/homeimg1.avif"
              alt=""
            />
          </div>
          <div className="absolute bottom-1 left-1/2 ">
            <img
              className=" h-32 w-32 object-center object-cover mix-blend-multiply rounded-full"
              src="/src/pages/img/homeimg2.avif"
              alt=""
            />
          </div>
          <div className="absolute top-10 left-10">
            <img
              className=" h-32 w-32 object-center object-cover mix-blend-hard-light rounded-full"
              src="/src/pages/img/homeimg3.avif"
              alt=""
            />
          </div>
          <div className="z-10 flex flex-col gap-4 sm:gap-10 text-center text-black text-4xl sm:text-5xl md:text-6xl">
            <p>Welcome to foodmandu.</p>
            <p>Order food from the widest range of restaurants.</p>
          </div>
        </div>
      </div>

      <div className="mx-8 sm:mx-12 md:mx-24 lg:mx-32">
        <div className="border-[1px] border-zinc-500 w-full my-10"></div>

        {/* //most popular */}
        <div className="min-h-screen w-full my-10">
          <h1 className="text-4xl md:text-5xl my-6">People's Favorite</h1>

          <Foodbox />
        </div>

        <div className="border-[1px] border-zinc-500 w-full my-10"></div>

        {/* categories */}
        <div className=" min-h-screen w-full my-10">
          <h1 className="text-4xl md:text-5xl  my-6">Categories</h1>
          <div className="flex flex-wrap w-full md:gap-10 gap-6">
          {categoryList.map((categoryData, index) => {
            return (
              <CategoryList
                key={index}
                name={categoryData.name}
                image={categoryData.image}
                id={categoryData._id}
              />
            );
          })}
        </div>
        </div>

        <div className="border-[1px] border-zinc-500 w-full my-10"></div>

        {/* //about */}
        <div className="my-10">
          <h1 className="my-6 md:text-5xl  text-4xl">About Us</h1>
          <div
            className="text-center rounded-lg bg-center bg-cover py-12 text-xl sm:text-2xl  text-zinc-100"
            style={{ backgroundImage: `url("/src/pages/img/abouimg.jpg")` }}
          >
            <p className="my-4">
              Foodmandu is the fastest, easiest and most convenient way to enjoy
              the best food of your favourite restaurants at home, at the office
              or wherever you want to.
            </p>
            <p className="my-4">
              We know that your time is valuable and sometimes every minute in
              the day counts. That’s why we deliver! So you can spend more time
              doing the things you love.
            </p>
          </div>
        </div>
        <div className="border-[1px] border-zinc-500 w-full my-10"></div>
        <div>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
