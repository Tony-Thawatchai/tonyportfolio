import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Infinity } from "lucide-react";

function SectionHero() {
  return (
    <section className="section max-w-[1300px] items-center flex flex-col gap-6 lg:gap-10 mt-16 mb-24 xl:mb-32 xl:flex-row  ">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1 gap-2 flex flex-col w-full"
      >
        <h2>I'm Tony</h2>

        <h1 className="text-6xl md:text-[90px] ">Full Stack Developer</h1>

        <h3 className="text-2xl">Creating impact with technology.</h3>
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
            {/* Get in touch */}
          </Button>
          {/* <Button
            href="/"
            className="text-primary bg-white hover:bg-primary-light"
          >
            Download CV
          </Button> */}
        </div>
      </motion.div>
      <div
        className="
      
      flex 
      /justify-end/
      justify-center
      items-center 
      md:h-[50%] md:w-[50%]
      lg:h-[50%] lg:w-[50%] 
      xl:h-1/3 xl:w-1/3 relative p-7
       'bg-blue-400'
       
      
      "
      >
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          initial={{ rotate: 0 }}
          className="circle-dash"
        ></motion.div> */}

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          initial={{ opacity: 0.5, scale: 0.9 }}
          className="circle-image "
        >
          <Image
            src={"/profile/profile.png"}
            width={1000}
            height={1000}
            alt="profile picture of Tony Thawatchai"
            className="profileImg "
          />
          {/* <motion.div
            animate={{ opacity: 1, zIndex: -1 }}
            transition={{  duration: 1 }}
            initial={{ opacity: .5,zIndex: -1 }}
            className="circle-image-primary"
          >
            
          </motion.div> */}
        </motion.div>
        <motion.div
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 4 }}
         initial={{ opacity: 0, scale: 0.9 }}
          className="circle-color"
        ></motion.div>
        <motion.div
          animate={{ scale: 1 }}
          transition={{  duration: 3 }}
          initial={{ scale: 0.7 }}
          className="circle-dash"
        ></motion.div>
      </div>
    </section>
  );
}

export default SectionHero;
