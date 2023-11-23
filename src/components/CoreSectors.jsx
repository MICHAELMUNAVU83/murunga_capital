import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const CoreSectors = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [paragraph, setParagraph] = useState(
    "In Finance, we leverage financial expertise to fuel economic growth. We work with businesses, institutions, and individuals to create sustainable financial solutions that drive prosperity and financial inclusion."
  );
  const [selectedSlide, setSelectedSlide] = useState(null);

  const coresectors = [
    {
      id: 1,
      title: "Finance",
      img: "/core2.svg",
      description:
        "In Finance, we leverage financial expertise to fuel economic growth. We work with businesses, institutions, and individuals to create sustainable financial solutions that drive prosperity and financial inclusion.",
    },
    {
      id: 2,
      title: "Education",
      img: "/core4.svg",
      description:
        "In Education, we believe in the power of knowledge and lifelong learning. Our initiatives aim to improve educational access, quality, and outcomes, empowering individuals and communities with the tools they need to thrive.",
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
        "In Health, we prioritize well-being and access to healthcare services. Our initiatives aim to improve public health, expand healthcare access, and promote healthy living for all.",
    },
  ];

  const handleSlideClick = (description) => {
    setParagraph(description);
  };

  return (
    <>
      <div className="md:flex hidden mx-auto w-[90%] justify-center">
        <p className=" text-5xl uppercase bg-clip-text bourtontitle font-bold text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE] ">
          Core Sectors
        </p>
      </div>
      <div className="border-8 trebuc w-[90%]  md:h-[180px]  mb-8  flex justify-center items-center p-4 text-[24px]  mx-auto border-[#46B4EE]  mt-10 ">
        <p>{paragraph}</p>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation]}
        className="w-[90%] mx-auto"
      >
        <div className="flex gap-20">
          {coresectors.map((coresector) => (
            <SwiperSlide key={coresector.id}>
              <div
                className={`flex flex-col pb-12 my-4 cursor-pointer justify-between items-center md:h-[250px] shadow-xl transition-all ease-in-out duration-500 hover:shadow-blue-500  ${
                  selectedSlide === coresector.id
                    ? "shadow-blue-400"
                    : "shadow-gray-400"
                }`}
                onClick={() => {
                  handleSlideClick(coresector.description);
                  setSelectedSlide(coresector.id);
                }}
              >
                <div>
                  <img
                    src={coresector.img}
                    className=""
                    alt={coresector.title}
                  />
                </div>
                <div className="mt-5 bg-gradient-to-r bourtontitle flex items-center text-[30px] from-[#27419B] to-[#21B4EE]  p-2 h-[52px] w-[100%]   text-[#fff]">
                  <h2>{coresector.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default CoreSectors;
