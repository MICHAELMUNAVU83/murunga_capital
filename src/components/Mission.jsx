import React from "react";

const Mission = () => {
  return (
    <div className="py-8 w-[90%] mx-auto ">
      <div className="flex justify-between w-[100%] border-t-[5px] border-[#27419B]">
        <div className="w-[50%]">
          <img
            src="/mission.svg"
            className="h-[538px] w-[100%] object-cover "
          />
        </div>
        <div className="w-[50%] flex justify-between flex-col px-8">
          <div className="flex w-[100%] justify-end">
            <p className="text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
              OUR MISSION
            </p>
          </div>

          <div className="flex gap-4 pl-12 flex-col">
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

          <div className="flex w-[100%] justify-end">
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
