import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Approach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      id="approach"
      className="py-8 md:px-12 px-4 mx-auto"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <motion.div
        ref={ref}
        className="w-[100%] bourtontitle border-t-[5px] border-[#27419B]  text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        OUR APPROACH
      </motion.div>

      <motion.div
        ref={ref}
        className="w-[100%] mt-4 flex  md:flex-row flex-col justify-between "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          ref={ref}
          className="md:w-[45%] border-[5px] p-2 md:p-0 border-[#27419B] md:border-0 flex flex-col gap-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.p
            ref={ref}
            className="md:text-4xl text-2xl bourtontitle my-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We succeed because we look at Investment in Africa through an Impact
            lens.
          </motion.p>
          <motion.div
            className="w-[100%] flex justify-between"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="w-[85%] text-xl bourtontitle border-t-2 border-black"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 1, delay: 1.2 }}
            >
              MURUNGA CAPITAL GROUP LLC
            </motion.div>
            <motion.div
              className="w-[15%] "
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <img
                src="/quote.svg"
                className="h-[150px] -mt-4 w-[100%]"
                alt="Quote"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <p className="h-[400px] w-[1px] md:block hidden bg-black"></p>

        <motion.div
          className="md:w-[45%]  p-4 text-[18px] flex flex-col trebuc justify-between "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <p>
            Institutional investors, emerging market entrepreneurs, and
            multinationals are often skeptical about seeking new ventures in
            lesser-known markets.
          </p>

          <p>
            MURUNGA CAPITAL GROUP, LLC combines the diverse perspectives of
            macroeconomic, finance, strategy, and legal experts to reduce the
            perceived risks of doing business in Africa. As seasoned global
            experts, we leverage the human and financial capital to fill the
            various institutional voids to drive growth in the region.
          </p>
          <p>
            We succeed because we look at Economic Development through a 360
            lens of Charity, Programs, and Entrepreneurship.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center  text-center bg-gradient-to-r rounded-[12px] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer text-2xl text-white  from-[#27419B] to-[#21B4EE] bourtontitle uppercase mt-4 p-4 items-center bg-blue-500 w-[100%]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, delay: 1.8 }}
      >
        request for client testimonials
      </motion.div>
    </motion.div>
  );
};

export default Approach;
