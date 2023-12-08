import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { IoIosArrowUp } from "react-icons/io";

const Values = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 }, // Start from the left
    visible: { opacity: 1, x: 0 }, // Move to its original position
  };
  const swipe = () => {
    const swiper = document.querySelector(".swiper-containers").swiper;
    swiper.slideNext();
  };

  const swipeback = () => {
    const swiper = document.querySelector(".swiper-containers").swiper;
    swiper.slidePrev();
  };
  const slides = ["/value1.svg", "/value2.svg", "/value3.svg", "/value4.svg"];
  return (
    <div id="values" className="py-8 md:px-12 px-4 mx-auto ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="md:hidden flex w-[100%] justify-start"
      >
        <p className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          OUR VALUES
        </p>
      </motion.div>

      <div className="flex justify-between items-center w-[100%]">
        <motion.img
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          onClick={swipeback}
          src="/swipeback.svg"
          className="md:h-[39px]   h-[30px] z-40  -mr-4 w-[30px] md:w-[39px]"
        />

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className=" w-[90%]  swiper-containers"
          loop={true}
          rewind={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="h-[350px] flex justify-center  py-4  "
            >
              <motion.img
                ref={ref}
                src={slide}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.6 }}
                className="h-[302] w-[100%] object-fill md:object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          onClick={swipe}
          src="/swipe.svg"
          className="md:h-[39px] h-[30px] z-40  -ml-4 w-[30px] md:w-[39px]"
        />
      </div>
    </div>
  );
};

export default Values;
