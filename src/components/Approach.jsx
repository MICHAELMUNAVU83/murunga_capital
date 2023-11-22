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
        className="w-[100%] bourtontitle  flex justify-center items-center text-5xl   bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        OUR APPROACH
      </motion.div>

      <motion.div
        ref={ref}
        className="w-[100%] mt-4 flex md:px-24  px-6  flex-col justify-between "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          ref={ref}
          className="w-[100%] p-2 md:p-0  md:border-0 flex flex-col gap-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.p
            ref={ref}
            className="md:text-4xl text-center text-base bourtontitle my-4"
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
              className="w-[100%] text-xl bourtontitle border-t-2 border-black"
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
                className="h-[100px] -mt-8 w-[100%]"
                alt="Quote"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[100%]  p-4 md:text-[28px] text-xl gap-6  flex flex-col trebuc justify-between "
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
    </motion.div>
  );
};

export default Approach;
