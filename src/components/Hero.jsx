import React, { useRef, useState, useEffect } from "react";
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

  const slides = [
    { image: "/bg1.png", id: 1, text: "" },
    { image: "/bg2.jpeg", id: 2, text: "Sisyphus" },
  ];

  return (
    <>
      <div className=" mb-48  relative w-[100vw]   ">
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
            <SwiperSlide key={slide.id} className="h-[100vh]   ">
              <motion.div
                className="w-[100%] relative  h-[100%]  md:py-16 "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6 }}
              >
                <div
                  className="w-[100%] relative h-[100%]"
                  style={{
                    background: `url(${slide.image})`,
                    backgroundSize: "cover",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="absolute  bourtontitle md:text-7xl text-2xl top-12 md:left-12  left-6">
                    {slide.text}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bg-white absolute md:-bottom-48 -bottom-36 left-1/2 transform -translate-x-1/2 z-40 shadow-gray-200   shadow-xl md:w-[70%] w-[100%] mx-auto flex flex-col gap-4 p-12">
          <p className="bourtontitle md:text-5xl font-bold">
            Our Focus: Fighting The `Wicked Problems`  in Development
          </p>
          <p className="trebuc md:text-xl">
            We strive to unlock Growth, Innovation and Impact. Explore how
            Murunga Capital can unlock opportunities and drive positive change
            in emerging markets.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
