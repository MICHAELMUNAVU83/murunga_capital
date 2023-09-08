import React from "react";

const Approach = () => {
  return (
    <div className="py-8 w-[90%] mx-auto">
      <div className="flex flex-col gap-0">
        <p className="w-[100%] bg-black h-[1px] " />
        <p>Our Approach</p>
      </div>

      <div className="w-[100%] flex justify-between ">
        <div className="w-[45%] flex flex-col gap-4">
          <p>
            Economic Development through a 360 lens of Charity, Programs and
            Entrepreneurship
          </p>
          <div className="w-[100%] flex justify-between">
            <div className="w-[85%] border-t-2 border-black">
              MURUNGA CAPITAL GROUP LLC
            </div>
            <div className="w-[15%] ">
              <img src="/quote.svg" className="h-[150px] -mt-4 w-[100%]" />
            </div>
          </div>
        </div>

        <p className="h-[400px] w-[1px] bg-black"></p>
        <div className="w-[45%] flex flex-col gap-4">
          <p>
            Institutional investors, emerging market entrepreneurs, and
            multinationals, are often skeptical about seeking new ventures in
            lesser-known markets. MURUNGA CAPITAL GROUP, LLC combines the
            diverse perspectives of macroeconomic, finance, strategy, and legal
            experts to reduce the perceived risks of doing business in Africa.
            As seasoned global experts, we leverage the human and financial
            capital to fill the various institutional voids to drive growth in
            the region. We succeed because we look at Economic Development
            through a 360 lens of Charity, Programs and Entrepreneurship.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4 p-4 items-center bg-blue-500 w-[100%]">
        request for client testimonials
      </div>
    </div>
  );
};

export default Approach;
