import React from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";
import HeaderSection from "./HeaderSection.jsx";
function SectionAbout() {
  return (
    <section className="section max-w-[1300px] items-start  flex flex-col gap-6 mt-24 mb-24 xl:mt-32  ">
      {/* <motion.h2 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      
      className="text-5xl md:text-[64px] font-bold ">
        About me<span className=" text-[var(--secondary-color)] ">.</span>
      </motion.h2> */}
      <HeaderSection text="About me" />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        <p className="about-text">
          Hi. I’m Tony Saengthamchai <br />
          {/* <RoughNotation type="box" show={true} animationDelay={5000} animate={true} animationDuration={2000}> */}
          <motion.span
            // animate={{ color: "hsl(153, 63%, 32%)" }}
            // transition={{ duration: 2 }}
            // initial={{ color: "hsl(172, 0%, 0%)" }}
            // // whileInView={"show"}
            // viewport={{ once: true, amount: 0.5 }}
            className="bold-text"
          >
            Full Stack Developer{" "}
          </motion.span>
          {/* </RoughNotation> */}
          hoping to create a better world with technology.
        </p>
        <p className="about-text">
          I’m passionate about
          {/* <RoughNotation type="highlight" show={true} animationDelay={5500} animate={true} animationDuration={2000} color="yellow"> */}
          <motion.span className="bold-text">
            sustainability, social equality.
          </motion.span>
          {/* </RoughNotation> It would be my */}
          honoured to create something meaningful.
        </p>
      </motion.div>
    </section>
  );
}

export default SectionAbout;
