import React from "react";

const Contact = () => {
  return (
    <div className="py-8 md:px-12 px-4 mx-auto">
      <div className="flex flex-col md:border-t-[5px] md:border-[#27419B] gap-0">
        <p className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          CONTACT US
        </p>
      </div>

      <div className="w-[100%] mt-4 flex md:flex-row flex-col-reverse justify-between ">
        <div className="md:w-[45%] flex flex-col gap-4">
          <p className="text-3xl uppercase bourtontitle">we’re here to serve</p>
          <div className="text-xl flex flex-col gap-4 trebuc">
            <p>
              Ready to explore how Murunga Capital Group can drive growth,
              innovation, and impact for your organization or collaborate on
              impactful projects? We're just a message away.
            </p>
            <p>
              Whether you're an institutional investor, an entrepreneur looking
              to venture into emerging markets, a multinational seeking
              opportunities, or a potential partner (NGOs, governments,
              foundations), we're here to assist you every step of the way.
              Don't hesitate to reach out to our team of experts. We look
              forward to connecting with you, understanding your goals, and
              charting a course towards impactful success together.
            </p>
            <p>Let's make a difference. Contact Murunga Capital Group today.</p>
          </div>
        </div>

        <p className="h-[626px] w-[1px] hidden md:block bg-black"></p>
        <div className="md:w-[45%] flex flex-col gap-4">
          <form className="flex trebuc flex-col gap-4 w-[100%]">
            <div className="flex flex-col gap-5 md:flex-row justify-between w-[100%">
              <div className="md:w-[48%]">
                <input
                  className="bg-gradient-to-r from-[#27419B] to-[#21B4EE] rounded-xl p-2 h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                  placeholder="First Name"
                />
              </div>
              <div className="md:w-[48%]">
                <input
                  class="bg-gradient-to-r from-[#27419B] to-[#21B4EE] rounded-xl p-2 h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="w-[100%]">
              <input
                className="bg-gradient-to-r from-[#27419B] to-[#21B4EE]  p-2 rounded-xl h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                placeholder="Email"
              />
            </div>
            <div className="w-[100%]">
              <textarea
                className="bg-gradient-to-r from-[#27419B] to-[#21B4EE] w-[100%]  p-2 rounded-xl h-[193px] text-[#CBCCD3] placeholder-[#CBCCD3]"
                placeholder="Your Message here"
              />
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" className="w-8 h-8" />
              <p>
                I would love to receive information on newsletters and more
                offers
              </p>
            </div>
          </form>
          <div className="flex items-center gap-2">
            <button className="bg-gradient-to-r bourtontitle text-2xl text-white from-[#27419B] to-[#21B4EE] w-[100%] hover:scale-105 transition-all ease-in-out cursor-pointer duration-500 uppercase h-[52px] shadow-xl shadow-gray-200 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
