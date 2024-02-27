import React, { useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link} from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previousY, setPreviousY] = useState(0);
  const [isVissible, setIsVissible] = useState(true);

  useEffect(() => {
    setPreviousY(window.scrollY);

    const handleScroll = () => {
      const currentPostionY = window.scrollY;
      setIsVissible(previousY > currentPostionY || currentPostionY < 10);
      setPreviousY(currentPostionY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`z-50 fixed bg-zinc-900 w-full transition-all duration-300 ${
          isVissible ? "" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center mx-4 p-2 text-lg">
          <div className="">
            <Link className="cursor-pointer" to="/" onClick={closeMenu}>
              <img
                className=" object-cover object-center h-8 mix-blend-plus-lighter"
                src="/src/assets/img/logo-n.png"
                alt=""
              />
            </Link>
          </div>
          <div className=" md:hidden">
            <button onClick={toggleMenu} className=" text-white">
              <GiHamburgerMenu className="h-6 w-6 filler" />
            </button>
          </div>

          <div className=" hidden md:flex gap-10 ">
            <Link className="cursor-pointer" to="/category" onClick={closeMenu}>
              Veg
            </Link>
            
            <Link className="cursor-pointer" to="/category" onClick={closeMenu}>
              Non-Veg
            </Link>
          </div>

          <div>
            <CgProfile className="text-3xl text-blue-500" />
          </div>
        </div>

        {/* hamburg menu */}
        <div
          className={`${
            isMenuOpen
              ? "flex flex-col justify-center md:hidden gap-2 m-4"
              : "hidden"
          }`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="cursor-pointer hover:bg-zinc-800 p-2 rounded-lg"
          >
            Home
          </Link>
          <Link
           to="/category"
            onClick={closeMenu}
            className="cursor-pointer hover:bg-zinc-800 p-2 rounded-lg"
          >
            Veg
          </Link>
          <Link
           to="/category"
            onClick={closeMenu}
            className="cursor-pointer hover:bg-zinc-800 p-2 rounded-lg"
          >
            Non-veg
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
