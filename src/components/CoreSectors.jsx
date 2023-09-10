import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper/modules";

const CoreSectors = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");
  const coresectors = [
    {
      id: 1,
      title: "Finance",
      img: "/core2.svg",
      description:
        "In Finance, we leverage financial expertise to fuel economic growth. We work with businesses, institutions, and individuals to create sustainable financial solutions that drive prosperity and financial inclusion. ",
    },
    {
      id: 2,
      title: "Education",
      img: "/core4.svg",
      description:
        "In Education, we believe in the power of knowledge and lifelong learning. Our initiatives aim to improve educational access, quality, and outcomes, empowering individuals and communities with the tools they need to thrive. ",
    },
    {
      id: 3,
      title: "Technology",
      img: "/core1.svg",
      description:
        "In Technology, we embrace innovation as a catalyst for progress. By supporting tech startups, digital infrastructure projects, and technology-driven education, we help emerging markets harness the transformative potential of the digital age.",
    },
    {
      id: 4,
      title: "Energy",
      img: "/core3.svg",
      description:
        "In Energy, we recognize the vital role of sustainable energy solutions in building a brighter future. Our commitment to renewable energy projects and energy access initiatives is propelling us toward a more sustainable and electrified world.",
    },
    {
      id: 5,
      title: "Health",
      img: "/core2.svg",
      description:
        "In Energy, we recognize the vital role of sustainable energy solutions in building a brighter future. Our commitment to renewable energy projects and energy access initiatives is propelling us toward a more sustainable and electrified world.",
    },
  ];

  return (
    <div id="core-sectors" className="py-8 px-12 mx-auto ">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="md:w-[80%] px-12  mx-auto ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          className="mb-2 cursor-pointer py-8"
          thumbs={{ swiper: thumbsSwiper }}
          pagination={true}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
        >
          {coresectors.map((sector) => (
            <SwiperSlide>
              <div className="flex justify-around  ">
                <div className="bg-red-500 h-[300px] w-[300px]">
                  {sector.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={4}
          className="mySwiper"
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,

            loop: true,
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        >
          {coresectors.map((sector) => (
            <SwiperSlide className="h-[300px] w-[25%]  ">
              <img
                src={sector.img}
                className="  object-cover object-center opacity-60 hover:opacity-100 cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default CoreSectors;
