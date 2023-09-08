import React from "react";

const Footer = () => {
  return (
    <div className="py-8 w-[90%] mx-auto">
      <div className="flex flex-col gap-0">
        <p className="w-[100%] bg-black h-[1px] " />
        <p>Interact with us</p>
      </div>
      <div className="flex justify-between w-[100%]">
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
      <p className="text-center">
        © COPYRIGHT 2023 | MURUNGA CAPITAL GROUP LLC | ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
