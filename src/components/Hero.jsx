import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
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
      title: "UNLOCK Growth, Innovation and Impact",
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
      id="home"
      slidesPerView={1}
      className="w-[100%]  swiper-container"
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
          <motion.div
            className="md:w-[55%] h-[100%]  md:py-12 flex flex-col justify-between gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
          >
            <div className="md:flex hidden w-[100%] md:pt-24 flex-col gap-2">
              <img
                src="/banner.svg"
                className="w-[100%] h-[109px] object-cover"
              />
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
          </motion.div>
          <div className="md:w-[45%] w-[100%] pt-24 md:pt-0 flex flex-col gap-4">
            <div className="flex md:hidden w-[100%] md:pt-24 flex-col gap-2">
              <img
                src="/banner.svg"
                className="w-[100%] h-[71px] object-cover"
              />
            </div>
            <div className="h-[100%] w-[100%] flex justify-center  items-center">
              <img
                onClick={swipeback}
                src="/swipe.svg"
                className="md:h-[39px] h-[30px] rotate-180 -mr-4 w-[30px] md:w-[39px]"
              />

              <motion.img
                src={slide.image}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.6 }}
                loading="lazy"
                className="h-[100%] w-[95%] md:w-[100%] object-cover"
              />
              <img
                onClick={swipe}
                src="/swipe.svg"
                className="md:h-[39px] h-[30px]  -ml-4 w-[30px] md:w-[39px]"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
