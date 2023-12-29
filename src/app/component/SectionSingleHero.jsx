import React from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

function SectionSingleHero({ content }) {
  return (
    <section className="section max-w-[1300px] items-start  flex flex-col gap-6  mt-16 mb-16   ">
      <HeaderSection text={content.title} />
      <motion.h3
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl 
      max-w-[700px]"
      >
        {content.subtitle}
      </motion.h3>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="singleImgCardWrap"
      >
        <Image
          className="singleImgCard"
          src={content.imageMain}
          alt={content.title}
          width={1200}
          height={1200}
        />
      </motion.div>
    </section>
  );
}

export default SectionSingleHero;
