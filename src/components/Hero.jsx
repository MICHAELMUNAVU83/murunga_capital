import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const Hero = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeback = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  const slides = [
    {
      id: 1,
      title: "Discover Growth, Innovation and Impact",
      desc: "Explore how Murunga Capital can unlock opportunities and drive positive change in emerging markets.",
      image: "/hero1.svg",
    },
    {
      id: 2,
      title: "Leaders in Sustainable Investment",
      desc: "Learn about our commitment to responsible investing and how we're creating a lasting impact in key sectors.",
      image: "/hero2.svg",
    },
    {
      id: 3,
      title: "Partner with Us",
      desc: "Ready to make a difference? Contact us today to discover how you can leverage our expertise to drive growth, innovation, and impact in emerging markets.",
      image: "/hero3.svg",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      className=" w-[100%]  swiper-container"
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination, Scrollbar]}
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="md:h-[100vh]  px-4  mx-auto md:px-12 flex  md:flex-row  flex-col-reverse justify-between "
        >
          <div className="md:w-[55%] h-[100%]  md:py-12 flex flex-col justify-between gap-4">
            <div className="md:flex hidden w-[100%] md:pt-24 flex-col gap-2">
              <div className="w-[100%] bourtontitle border-b-[5px] border-[#27419B]  text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
                MURUNGA CAPITAL GROUP LLC
              </div>
              <p className="trebuc">Growth. Innovation. Impact.</p>
            </div>
            <div className="flex flex-col  gap-2 w-[100%]">
              <div className="bourtontitle text-3xl md:text-6xl">
                {slide.title}
              </div>
              <p className="text-[20px] trebuc">{slide.desc}</p>
            </div>

            <div className="bg-gradient-to-r rounded-[12px] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer bourtontitle uppercase w-[285px]  text-2xl  from-[#27419B] to-[#21B4EE]  flex gap-2 justify-center items-center text-white px-8 py-3">
              <p>Learn More</p>
              <div className="flex items-center">
                <img src="/arrows.svg" />
                <img src="/arrows.svg" />
              </div>
            </div>
          </div>
          <div className="md:w-[45%] w-[100%] pt-24 md:pt-0 flex flex-col gap-4">
            <div className="flex md:hidden w-[100%] md:pt-24 flex-col gap-2">
              <div className="w-[100%] bourtontitle border-b-[5px] border-[#27419B]  text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
                MURUNGA CAPITAL GROUP LLC
              </div>
              <p className="trebuc">Growth. Innovation. Impact.</p>
            </div>
            <div className="h-[100%] w-[100%] flex justify-center  items-center">
              <p
                onClick={swipeback}
                className="w-[39px] h-[39px] -mr-4 z-30 rounded-full flex justify-center items-center bg-gradient-to-r from-[#27419B] to-[#21B4EE]  text-white cursor-pointer"
              >
                <img src="/arrows.svg" className="rotate-180 object-contain" />
                <img src="/arrows.svg" className="rotate-180 object-contain" />
              </p>
              <img
                src={slide.image}
                className="h-[100%] w-[100%] object-cover"
              />
              <p
                onClick={swipe}
                className="w-[39px] h-[39px] -ml-4 z-30 rounded-full flex justify-center items-center bg-gradient-to-r from-[#27419B] to-[#21B4EE]  text-white cursor-pointer"
              >
                <img src="/arrows.svg" className=" object-contain" />
                <img src="/arrows.svg" className=" object-contain" />
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
