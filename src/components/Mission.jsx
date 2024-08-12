import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="mission" className="py-8 px-4 md:px-12 mx-auto">
      <div className="flex justify-center items-center my-6">
        <motion.p
          className="md:text-6xl text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          OUR MISSION
        </motion.p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between w-[100%] ">
        <div className="md:w-[50%]">
          <motion.img
            ref={ref}
            src="/mission2.svg"
            className="md:h-[100%] h-[228px] w-[100%] object-cover"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6 }}
            alt="Mission Image"
          />
        </div>
        <div className="md:w-[50%] w-[100%] flex justify-between flex-col md:px-8">
          <motion.div
            className="flex gap-4 md:pl-12 flex-col"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p className="trebuc text-2xl">
              We provide Growth, Innovation, and Impact Advisory to
              organizations across the US.
            </motion.p>
            <motion.p className="trebuc text-2xl">
              We do this with an overriding commitment to helping attain the SDG
              goals in Economic Growth, Finance, Energy, Education, Technology,
              and Health sectors.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
