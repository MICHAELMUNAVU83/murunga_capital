import React from "react";

const Hero = () => {
  return (
    <div className="md:h-[100vh]  mx-auto w-[90%] flex justify-between">
      <div className="w-[55%] h-[100%]  py-12 flex flex-col justify-between gap-4">
        <div className="flex w-[100%] pt-24 flex-col gap-2">
          <div className="w-[100%] bourtontitle border-b-[5px] border-[#27419B]  text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
            MURUNGA CAPITAL GROUP LLC
          </div>
          <p className="trebuc">Growth. Innovation. Impact.</p>
        </div>
        <div className="flex flex-col  gap-2 w-[100%]">
          <div className="bourtontitle text-6xl">
            Discover Growth, Innovation and Impact
          </div>
          <p className="text-[20px] trebuc">
            Explore how Murunga Capital can unlock opportunities and drive
            positive change in emerging markets.
          </p>
        </div>

        <div className="bg-gradient-to-r rounded-[12px] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer bourtontitle uppercase w-[285px]  text-2xl  from-[#27419B] to-[#21B4EE]  flex gap-2 justify-center items-center text-white px-8 py-3">
          <p>Learn More</p>
          <div className="flex items-center">
            <img src="/arrows.svg" />
            <img src="/arrows.svg" />
          </div>
        </div>
      </div>
      <div className="w-[45%] flex flex-col gap-4">
        <img src="/hero1.svg" className="h-[100%] w-[100%] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
