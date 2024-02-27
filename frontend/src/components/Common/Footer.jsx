import React from "react";

const Footer = () => {
  return (
    <div className="p-2 md:p-3 md:text-lg bg-zinc-800 rounded-lg">
      <div className="capitalize md:mx-4 flex flex-wrap justify-between gap-2 md:gap-3 tracking-wide">
        <div className="flex flex-wrap  gap-2 md:gap-4">
          <p>terms of Usage |</p>
          <p>Privacy policy &copy; 2024</p>
        </div>
        <div className="flex flex-wrap  gap-2 md:gap-4">
          <p>Foodmandu Pvt.Ltd. </p>
          <p>all rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
