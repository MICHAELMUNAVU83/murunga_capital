import React from "react";

const Footer = () => {
  return (
    <div className="py-8 w-[90%] mx-auto">
      <div className="flex flex-col gap-0">
        <p className="w-[100%]  bg-[#27419B] h-[5px] " />

        <p className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          Interact with us
        </p>
      </div>
      <div className="flex mt-4 justify-between w-[100%]">
        <img
          src="/instagram.svg"
          className="h-[50px] w-[50px] object-contain"
        />
        <img src="/facebook.svg" className="h-[50px] w-[50px] object-contain" />
        <img src="/whatsapp.svg" className="h-[50px] w-[50px] object-contain" />
        <img src="/linkedin.svg" className="h-[50px] w-[50px] object-contain" />
        <img src="/twitter.svg" className="h-[50px] w-[50px] object-contain" />
        <img src="/mail.svg" className="h-[50px] w-[50px] object-contain" />
      </div>
      <p className="text-center bourtontitle text-xl mt-4">
        © COPYRIGHT 2023 | MURUNGA CAPITAL GROUP LLC | ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
