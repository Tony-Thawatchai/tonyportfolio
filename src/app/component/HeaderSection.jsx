import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

function HeaderSection({text}) {
  return (
    <motion.h2
    variants={fadeIn("right", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.2 }}
    className="text-5xl md:text-[64px] font-bold "
  >
    {/* {text}<span className=" text-[var(--secondary-color)] ">.</span> */}
    {text}<span className=" text-[var(--primary-color)] ">.</span>
  </motion.h2>
  )
}

export default HeaderSection
