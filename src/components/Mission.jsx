import React from "react";

const Mission = () => {
  return (
    <div className="py-8 w-[90%] mx-auto ">
      <div className="flex md:hidden  w-[100%] justify-start md:justify-end">
        <p className="md:text-6xl text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          OUR MISSION
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between w-[100%] border-t-[5px] md:border-[#27419B]">
        <div className="md:w-[50%]">
          <img
            src="/mission.svg"
            className="md:h-[538px] h-[228px] w-[100%] object-cover "
          />
        </div>
        <div className="md:w-[50%] w-[100%] flex justify-between flex-col md:px-8">
          <div className="md:flex hidden w-[100%] justify-start md:justify-end">
            <p className="md:text-6xl text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
              OUR MISSION
            </p>
          </div>

          <div className="flex gap-4 md:pl-12 flex-col">
            <p className="trebuc  text-xl">
              We provide, Growth, Innovation and Impact Advisory to US-based
              organizations doing business in Africa using Equity or Debt
              Capital.
            </p>
            <p className="trebuc text-xl">
              We do this with an overriding commitment to helping attain the SDG
              goals in Economic Growth, Finance, Energy, Education, Technology,
              and Health sectors.
            </p>
          </div>

          <div className="flex w-[100%] justify-center  mt-8 md:mt-0 md:justify-end">
            <p className="bg-gradient-to-r  rounded-[12px] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer bourtontitle uppercase  text-2xl  from-[#27419B] to-[#21B4EE] text-white px-8 py-3">
              Connect with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
