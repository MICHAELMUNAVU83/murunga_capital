import React from "react";

const Footer = () => {
  return (
    <div className="py-8 px-12 mx-auto">
      <div className="flex flex-col gap-0">
        <p className="w-[100%]  bg-[#27419B] h-[5px] " />

        <p className="bourtontitle border-[#27419B] text-3xl  md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          Interact with us
        </p>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-3  mt-4 gap-4 w-[100%]">
        <a href="/" rel="noreferrer" target="_blank">
          <img
            src="/instagram.svg"
            className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            src="/facebook.svg"
            className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            src="/whatsapp.svg"
            className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            src="/linkedin.svg"
            className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            src="/twitter.svg"
            className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            src="/mail.svg"
            className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
          />
        </a>
      </div>
      <p className="text-center bourtontitle text-xl mt-4">
        © COPYRIGHT 2023 | MURUNGA CAPITAL GROUP LLC | ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
