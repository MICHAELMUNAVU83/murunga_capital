import React from "react";

const Approach = () => {
  return (
    <div className="py-8 w-[90%] mx-auto">
      <div className="w-[100%] bourtontitle border-t-[5px] border-[#27419B]  text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
        MURUNGA CAPITAL GROUP LLC
      </div>

      <div className="w-[100%] mt-4 flex justify-between ">
        <div className="w-[45%] flex flex-col gap-4">
          <p className="text-4xl bourtontitle my-4">
            Economic Development through a 360 lens of Charity, Programs and
            Entrepreneurship
          </p>
          <div className="w-[100%] flex justify-between">
            <div className="w-[85%] text-xl bourtontitle border-t-2 border-black">
              MURUNGA CAPITAL GROUP LLC
            </div>
            <div className="w-[15%] ">
              <img src="/quote.svg" className="h-[150px] -mt-4 w-[100%]" />
            </div>
          </div>
        </div>

        <p className="h-[400px] w-[1px] bg-black"></p>
        <div className="w-[45%] p-4 text-[18px] flex flex-col trebuc justify-between ">
          <p>
            Institutional investors, emerging market entrepreneurs, and
            multinationals, are often skeptical about seeking new ventures in
            lesser-known markets.
          </p>

          <p>
            MURUNGA CAPITAL GROUP, LLC combines the diverse perspectives of
            macroeconomic, finance, strategy, and legal experts to reduce the
            perceived risks of doing business in Africa. As seasoned global
            experts, we leverage the human and financial capital to fill the
            various institutional voids to drive growth in the region.
          </p>
          <p>
            We succeed because we look at Economic Development through a 360
            lens of Charity, Programs and Entrepreneurship.
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-r rounded-[12px] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer text-2xl text-white  from-[#27419B] to-[#21B4EE] bourtontitle uppercase mt-4 p-4 items-center bg-blue-500 w-[100%]">
        request for client testimonials
      </div>
    </div>
  );
};

export default Approach;
