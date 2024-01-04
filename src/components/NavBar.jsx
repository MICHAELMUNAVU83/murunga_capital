import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="top-0 md:px-8 z-50  px-4 flex justify-between items-center w-[100%] fixed  shadow-sm shadow-gray-300 bg-white h-[50px] md:h-[90px]">
      <div className="md:flex hidden gap-12 items-center text-xl">
        <a href="#about">
          <p className="bourtontitle ">About US</p>
        </a>
      </div>
      <a href="#home">
        <img
          src="/murungatop.png"
          className="md:h-[70px] hidden md:block h-[80px] md:w-[400px] w-[260px] object-contain "
        />

        <img
          src="/ap.jpeg"
          className="md:hidden block h-[60px] w-[250px] object-contain  "
        />
      </a>

      <div className="md:flex hidden gap-12 items-center text-xl">
        <a href="#contact">
          <p className="bourtontitle ">Contact US</p>
        </a>
      </div>
      <div className="md:hidden flex gap-4">
        <AiOutlineMenu
          className={`text-4xl cursor-pointer text-[#2C84CB] ${
            nav ? "hidden" : ""
          }`}
          onClick={toggleNav}
        />
      </div>

      <div
        className={
          nav
            ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex  flex-col  w-full h-screen bg-white/90 text-black duration-300 ease-in-out"
            : "sm:hidden absolute top-0 right-0 -left-[100%] bottom-0 flex  flex-col  w-full h-screen bg-white/90 text-black duration-300 ease-in-out"
        }
      >
        <div className="flex w-[100%]  justify-end">
          <AiOutlineClose
            className="text-4xl justify-end mt-6 text-[#2C84CB] mr-4 cursor-pointer"
            onClick={toggleNav}
          />
        </div>
        <div className="flex flex-col gap-8 mt-8 items-center text-center text-2xl  w-[100%] h-[100%] ">
          <a href="/">
            <p className="bourtontitle ">About Us</p>
          </a>
          <a href="/">
            <p className="bourtontitle ">Mission</p>
          </a>
          <a href="/">
            <p className="bourtontitle ">Our Approach</p>
          </a>
          <a href="/">
            <p className="bourtontitle ">Our Founder</p>
          </a>
          <a href="/">
            <p className="bourtontitle ">Our Values</p>
          </a>
          <a href="/">
            <p className="bourtontitle ">Contact Us</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
