import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh]  mx-auto w-[90%] flex justify-between">
      <div className="w-[55%] h-[100%]  py-12 flex flex-col justify-between gap-4">
        <div className="flex w-[100%] flex-col gap-2">
          <div className="w-[100%] border-b-2 border-black">
            MURUNGA CAPITAL GROUP LLC
          </div>
          <p>Growth. Innovation. Impact.</p>
        </div>
        <div className="flex flex-col gap-2 w-[100%]">
          <div>Discover Growth, Innovation and Impact</div>
          <p>
            Explore how Murunga Capital can unlock opportunities and drive
            positive change in emerging markets.
          </p>
        </div>

        <p className="bg-blue-500 w-[220px] flex justify-center items-center text-white px-8 py-3">
          Connect with us
        </p>
      </div>
      <div className="w-[45%] flex flex-col gap-4">
        <img src="/hero1.svg" className="h-[100%] w-[100%] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
