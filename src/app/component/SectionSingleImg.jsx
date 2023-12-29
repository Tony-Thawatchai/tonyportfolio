import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

function SectionSingleImg({ content }) {
  console.log("imageArticle", content.imageArticle);
  return (
    <section className="section max-w-[1300px] items-center w-full  flex flex-col gap-6  mb-16 overflow-visible relative place-content-start h-auto  ">
      {content.imageArticle.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          key={index}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex justify-center"
        >
          <Image
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            key={index}
            src={item}
            alt="Screenshot of the project"
            width={1200}
            height={1200}
            className="w-9/12"
          />
        </motion.div>
      ))}
    </section>
  );
}

export default SectionSingleImg;
