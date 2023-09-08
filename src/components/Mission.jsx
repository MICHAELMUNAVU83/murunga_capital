import React from "react";

const Mission = () => {
  return (
    <div className="py-8 w-[90%] mx-auto ">
      <div className="flex justify-between w-[100%] border-t-2 border-black">
        <div className="w-[50%]">
          <img
            src="/mission.svg"
            className="h-[538px] w-[100%] object-cover "
          />
        </div>
        <div className="w-[50%] flex  flex-col gap-4 px-8">
          <div className="flex w-[100%] justify-end">
            <p>OUR FOUNDER</p>
          </div>

          <p>
            We provide, Growth, Innovation and Impact Advisory to US-based
            organizations doing business in Africa using Equity or Debt Capital.
            We do this with an overriding commitment to helping attain the SDG
            goals in Economic Growth, Finance, Energy, Education, Technology,
            and Health sectors.
          </p>

          <div className="flex w-[100%] justify-end">
            <p className="bg-blue-500 text-white px-8 py-3">Connect with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
