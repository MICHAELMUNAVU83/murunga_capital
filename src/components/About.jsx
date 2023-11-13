import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="about" className="py-8 px-4 md:px-12 mx-auto">
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
            src="/about.svg"
            className="md:h-[400px] h-[228px] w-[100%] object-cover"
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
              We are leaders in sustainable investment and we are committed to
              responsible investing that leaves a long lasting impact in key
              sectors.
            </motion.p>
            <motion.p className="trebuc text-2xl">
              Partnering with us is making a difference!
            </motion.p>
          </motion.div>

          <motion.div
            className="flex w-[100%] justify-center mt-8 md:mt-0  md:pl-12 md:justify-start"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r flex gap-2 rounded-[12px] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer bourtontitle uppercase text-2xl from-[#27419B] to-[#21B4EE] text-white px-8 py-3">
              Learn More
              <div className="flex items-center">
                <img src="/arrows.svg" />
                <img src="/arrows.svg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
