import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.main
      // animate={{ opacity: [1, 0.5, 1 ,0,5]}}
      // transition={{repeat: Infinity, duration: 1}}
      // initial={{ opacity: 0.5 }}
      className="flex flex-col items-center justify-between py-16 px-5 h-screen xl:px-8"
    >
      {/* <h1 className="mt-16"> loading...</h1> */}
      <motion.div
        animate={{
          scale: [1, .8, 1] ,
          opacity:[1,0.5,1,0.5],
          // letterSpacing: [0, 10, 0],
          // translateY: [0, 20, 0],
        }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        
        initial={{
           scale: 0.8, 
          opacity:.5,
          // letterSpacing: 10,
          // translateY: 20
         }}
        className="mt-16 h-full flex items-center"
      >
        <Image
          src={"/logo/logo.svg"}
          width={100}
          height={100}
          alt="profile picture of Tony Thawatchai"
          className=""
        />
      </motion.div>
    </motion.main>
  );
}

export default Loader;
