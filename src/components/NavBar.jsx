import React from "react";

const NavBar = () => {
  return (
    <div className="top-4 px-8 flex justify-between items-center w-[100%] fixed  shadow-sm shadow-gray-300 bg-white h-[90px]">
      <img src="/logo.svg" className="h-[103px] w-[173px] object-contain" />

      <div className="flex gap-12 items-center text-xl">
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
      </div>
    </div>
  );
};

export default NavBar;
