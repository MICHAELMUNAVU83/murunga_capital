import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="contact" className="py-8 md:px-12 px-4 mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:border-t-[5px] md:border-[#27419B] gap-0"
      >
        <p className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]">
          CONTACT US
        </p>
      </motion.div>

      <div className="w-[100%] mt-4 flex md:flex-row flex-col gap-4 justify-between ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="md:w-[45%] flex flex-col gap-4"
        >
          <p className="text-3xl uppercase bourtontitle">we’re here to serve</p>
          <div className="text-xl flex flex-col gap-4 trebuc">
            <img src="/contact.svg" className="w-[100%] h-[100%]" />
            <p>
              Ready to explore how Murunga Capital Group can drive growth,
              innovation, and impact for your organization or collaborate on
              impactful projects? We're just a message away.
            </p>
            <p>
              Growth. Innovation. Impact. Contact Murunga Capital Group today.
            </p>
          </div>
        </motion.div>

        <p className="h-[626px] w-[1px] hidden md:block bg-black"></p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="md:w-[45%] flex flex-col gap-4"
        >
          <form
            action="https://formspree.io/f/xgeqoana"
            method="POST"
            className="flex trebuc flex-col gap-4 w-[100%]"
          >
            <div className="flex flex-col gap-5 md:flex-row justify-between w-[100%">
              <div className="md:w-[48%]">
                <input
                  className="bg-gradient-to-r from-[#27419B] to-[#21B4EE] rounded-xl p-2 h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                  placeholder="First Name"
                  name="Fist_Name"
                />
              </div>
              <div className="md:w-[48%]">
                <input
                  class="bg-gradient-to-r from-[#27419B] to-[#21B4EE] rounded-xl p-2 h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                  placeholder="Last Name"
                  name="Last_Name"
                />
              </div>
            </div>
            <div className="w-[100%]">
              <input
                className="bg-gradient-to-r from-[#27419B] to-[#21B4EE]  p-2 rounded-xl h-[52px] w-[100%] text-[#CBCCD3] placeholder-[#CBCCD3] "
                placeholder="Email"
                name="Email"
              />
            </div>
            <div className="w-[100%]">
              <textarea
                className="bg-gradient-to-r from-[#27419B] to-[#21B4EE] w-[100%]  p-2 rounded-xl h-[193px] text-[#CBCCD3] placeholder-[#CBCCD3]"
                placeholder="Your Message here"
                name="Message"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="bg-gradient-to-r bourtontitle text-2xl text-white from-[#27419B] to-[#21B4EE] w-[100%] hover:scale-105 transition-all ease-in-out cursor-pointer duration-500 uppercase h-[52px] shadow-xl shadow-gray-200 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
