import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

function Infobox({content}) {
  return (
    <motion.div
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.2 }}
    className='infoboxOutterWrap w-full flex flex-col gap-4 md:basis-1/3 xl:flex-row flex-wrap xl:gap-4 xl:basis-5/12 lg:sticky top-[120px]'>
      <p className='xl:basis-2/6'>Year: <span className='font-bold'>{content.year}</span></p>
      <p  className='xl:basis-2/6'>Type: <span className='font-bold'>{content.projectType}</span></p>
      <p  className='xl:grow'>Role: <span className='font-bold'>{content.projectRole}</span></p>
      <p className='xl:grow'>Tools: <span className='font-bold'>{content.tool}</span></p>
      {content.link ?  <p className='xl:grow'>Link: <a href={content.link} target='blank' className='font-bold'>{content.link}</a></p> : null}
     
    </motion.div>
  )
}

export default Infobox
