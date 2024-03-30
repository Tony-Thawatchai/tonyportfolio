import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function SectionFooter() {
  return (
    <motion.div
      id="connect"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1 gap-2 flex flex-col w-full items-center mt-24 mb-24 "
    >
      <h2 className=" text-center px-5  " >Thank you for visiting. Let's connect!</h2>
      <div className="flex gap-4">
        <Button
          href="www.linkedin.com/in/tony-sa"
          className=" 
        
        text-default
        bg-[var(--primary-color)] 
        hover:bg-[var(--secondary-color)]
         hover:text-white main-cta 
        gap-2 
        text-lg py-6 rounded-2xl mt-4"
        >
          <FaLinkedin className="inline-block " size={"1.5rem"} />
          <Link target="_blank" href="http://www.linkedin.com/in/tony-sa">
            Connect with me
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default SectionFooter;
