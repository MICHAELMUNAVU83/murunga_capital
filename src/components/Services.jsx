import React from "react";

const Services = () => {
  const services = [
    {
      name: "Risk Management",
      image: "/service1.svg",
      description:
        "Using various risk management tools, we identify the risk exposure of a company’s business model based on a macroeconomic risk analysis of the different markets in East Africa. Our clients benefit from accurate assessments of potential risks associated with doing business in the East African Region.",
    },
    {
      name: "Strategy Consulting",
      image: "/service2.svg",
      description:
        "Using keen insights and macroeconomic analyses, we refine key strategy tools to ensure companies win in emerging markets. We specialize in providing customized guidance and support to each client from initial development through execution and beyond.",
    },
    {
      name: "Trade Facilitation",
      image: "/service3.svg",
      description:
        "We act as facilitators between different partners, who are seeking to start or complete international transactions.",
    },
    {
      name: "Capital Raising",
      image: "/service4.svg",
      description:
        "We provide growth, innovation and impact advisory to US based organizations providing equity or debt capital in Africa.",
    },
  ];
  return (
    <div className="py-8 px-4 md:px-12 mx-auto ">
      <div className="flex justify-center">
        <div className="grid  md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div className="flex  w-[100%]  flex-col gap-4">
              <div className="w-[100%] flex flex-col">
                <div className="bg-gradient-to-r -mb-16 md:-mb-8 z-10 bourtontitle text-2xl text-center flex justify-center items-center text-white from-[#27419B] to-[#21B4EE] md:w-[500px] w-[300px] hover:scale-105 transition-all ease-in-out cursor-pointer duration-500 uppercase h-[52px] shadow-xl  rounded-md">
                  {service.name}
                </div>
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-[279px] w-[3`00px] md:w-[500px]"
                />
              </div>

              <p className="trebux text-xl w-[300px] md:w-[500px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
