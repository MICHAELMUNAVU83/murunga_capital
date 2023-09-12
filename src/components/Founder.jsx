import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Founder = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6 }}
      id="founder"
      className="py-8 px-4 md:px-12 mx-auto "
    >
      <div className="md:hidden flex w-[100%] justify-end">
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]"
        >
          OUR FOUNDER
        </motion.p>
      </div>
      <div className="flex justify-between md:flex-row flex-col w-[100%] md:border-t-[5px] md:border-[#27419B]">
        <div className="md:w-[50%]">
          <motion.img
            src="/founder.svg"
            className="md:h-[750px] h-[400px] w-[100%] object-cover"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="md:w-[50%] flex  flex-col gap-8 md:px-8 text-xl trebuc">
          <div className="md:flex hidden w-[100%] justify-end">
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bourtontitle border-[#27419B]  text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27419B] to-[#21B4EE]"
            >
              OUR FOUNDER
            </motion.p>
          </div>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Principal Benedict Murunga, served as a Peace Corps Response
            Volunteer in Rwanda for 3 years. He holds an MBA in Corporate
            Finance from the University of Notre Dame South Bend, Indiana in the
            USA and a BA in Economics and Linguistics from the University of
            Nairobi in Nairobi, Kenya.
          </motion.p>

          <motion.p
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            He speaks 5 languages and has over 25 years’ experience in strategy,
            finance, and marketing across Europe, Middle East, Asia, US, and
            Africa. He recently closed a $10 million renewable project in
            Rwanda.
          </motion.p>
          <motion.p
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            He has served on several boards including the board of the
            Interfaith Children’s Movement in Atlanta, an advocacy organization
            on behalf of children, the board of AIESEC Egerton in Kenya, an
            organization focused on developing leadership and management talent
            of the youth, and the board of the American Chamber of Commerce In
            Rwanda.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
