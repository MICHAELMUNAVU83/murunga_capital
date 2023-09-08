import React from "react";

const Contact = () => {
  return (
    <div className="py-8 w-[90%] mx-auto">
      <div className="flex flex-col gap-0">
        <p className="w-[100%] bg-black h-[1px] " />
        <p>Contact Us</p>
      </div>

      <div className="w-[100%] flex justify-between ">
        <div className="w-[45%] flex flex-col gap-4">
          <p>we’re here to serve</p>
          <p>
            Ready to explore how Murunga Capital Group can drive growth,
            innovation, and impact for your organization or collaborate on
            impactful projects? We're just a message away. Whether you're an
            institutional investor, an entrepreneur looking to venture into
            emerging markets, a multinational seeking opportunities, or a
            potential partner (NGOs, governments, foundations), we're here to
            assist you every step of the way. Don't hesitate to reach out to our
            team of experts. We look forward to connecting with you,
            understanding your goals, and charting a course towards impactful
            success together. Let's make a difference. Contact Murunga Capital
            Group today.
          </p>
        </div>

        <p className="h-[626px] w-[1px] bg-black"></p>
        <div className="w-[45%] flex flex-col gap-4">
          <form class="flex flex-col gap-4 w-[100%]">
            <div class="flex flex-col gap-5 md:flex-row justify-between w-[100%">
              <div class="md:w-[48%]">
                <input
                  class="bg-[#292E91] rounded-xl p-2 h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                  placeholder="First Name"
                />
              </div>
              <div class="md:w-[48%]">
                <input
                  class="bg-[#292E91] rounded-xl p-2 h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="w-[100%]">
              <input
                class="bg-[#292E91]  p-2 rounded-xl h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                placeholder="Email"
              />
            </div>
            <div className="w-[100%]">
              <textarea
                class="bg-[#292E91] w-[100%]  p-2 rounded-xl h-[193px] text-[#CBCCD3] placeholder-[#CBCCD3]"
                placeholder="Email"
              />
            </div>
            <div class="flex items-center gap-2 ">
              <input type="checkbox" className="w-8 h-8" />
              <p>
                I would love to receive information on newsletters and more
                offers
              </p>
            </div>
          </form>
          <div className="flex items-center gap-2">
            <button className="bg-blue w-[100%] hover:scale-105 transition-all ease-in-out cursor-pointer duration-500 uppercase h-[52px] shadow-xl shadow-gray-200 rounded-md text-[#4CA9DF]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
