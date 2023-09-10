import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { IoIosArrowUp } from "react-icons/io";

const Values = () => {
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
      <div className="md:hidden flex w-[100%] justify-start">
        <p className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          OUR VALUES
        </p>
      </div>

      <div className="flex justify-between items-center w-[100%]">
        <img
          onClick={swipeback}
          src="/swipe.svg"
          className="md:h-[39px] h-[30px] z-40 rotate-180  -mr-4 w-[30px] md:w-[39px]"
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
          className=" w-[98%]  swiper-containers"
          loop={true}
          rewind={true}
          // autoplay={{
          //   delay: 7000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="h-[350px] flex justify-center  py-4  "
            >
              <img
                src={slide}
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
