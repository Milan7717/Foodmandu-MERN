import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="my-10 h-screen w-full text-lg md:text-xl">
      <h1 className="my-6 md:text-5xl text-4xl">Contact Us</h1>
      <div className="flex justify-center flex-wrap gap-16">
        <div className=" flex flex-col gap-2 w-[20%]">
          <h1 className="uppercase text:xl md:text:2xl ">we're foodmandu</h1>
          <div>
            <h1>About Us</h1>
            <h1>Available Areas</h1>
            <h1>Delivery Charges</h1>
          </div>
        </div>
        <div className=" flex flex-col gap-2 w-[20%]">
          <h1 className="uppercase text:xl md:text:2xl ">Service hour</h1>
          <span>08:00 AM to 9:00 PM</span>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className="uppercase text:xl md:text:2xl ">get help</h1>
          <div>
            <h1>How to Order?</h1>
            <h1>FAQs</h1>
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className=" flex flex-col gap-2 w-[20%]">
          <h1 className="uppercase text:xl md:text:2xl ">call us </h1>
          <div>
            <p>Kathmandu: 100</p>
            <p>Email: mail@gmail.com</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2 w-[20%]">
          <h1 className="uppercase text:xl md:text:2xl ">social links</h1>
          <div className="flex gap-4">
            <FaFacebook className="text-3xl md:text-5xl" />
            <FaInstagram className="text-3xl md:text-5xl" />
            <FaYoutube className="text-3xl md:text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
