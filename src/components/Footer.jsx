import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="py-8 md:px-12 px-4 mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-0"
      >
        <p className="w-[100%]  bg-[#27419B] h-[5px] " />

        <p className="bourtontitle border-[#27419B] text-3xl  md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          Interact with us
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center flex-wrap mt-4 gap-4 w-[100%]"
      >
        <a
          href="/"
          className="w-[30%] md:w-[15%] flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/instagram.svg"
            className="md:h-[50px]  h-[30px] object-contain"
          />
        </a>
        <a
          href="/"
          className="w-[30%] md:w-[15%] flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/facebook.svg"
            className="md:h-[50px]  h-[30px] object-contain"
          />
        </a>
        <a
          href="/"
          className="w-[30%] md:w-[15%] flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/whatsapp.svg"
            className="md:h-[50px]  h-[30px] object-contain"
          />
        </a>
        <a
          href="/"
          className="w-[30%] md:w-[15%] flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/linkedin.svg"
            className="md:h-[50px]  h-[30px] object-contain"
          />
        </a>
        <a
          href="/"
          className="w-[30%] md:w-[15%] flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/twitter.svg"
            className="md:h-[50px]  h-[30px] object-contain"
          />
        </a>
        <a
          href="/"
          className="w-[30%] md:w-[15%] flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/mail.svg"
            className="md:h-[50px]  h-[30px] object-contain"
          />
        </a>
      </motion.div>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="text-center bourtontitle text-xl mt-4"
      >
        © COPYRIGHT 2023 | MURUNGA CAPITAL GROUP LLC | ALL RIGHTS RESERVED
      </motion.p>

      <img
        src="/bannerssmall.png"
        className="h-[300px] w-[600px] mx-auto mt-4 object-contain"
      />
    </div>
  );
};

export default Footer;
