import React from "react";
import Infobox from "./Infobox";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

function SectionArticle({ content }) {
  return (
    <section className="section max-w-[1300px] items-start  flex flex-col gap-6  mb-16 md:flex-row overflow-visible relative place-content-start h-auto  ">
      <Infobox content={content} />
      <motion.article 
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0.2 }}
      className="text-lg basis-1/2 flex flex-col grow gap-4">
        {content.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      
      </motion.article>
      
    </section>
  );
}

export default SectionArticle;
