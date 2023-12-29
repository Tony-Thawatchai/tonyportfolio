"use client"
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

import Loader from "../component/Loader";
import HeaderSection from '../component/HeaderSection.jsx';
import SectionSingleHero from '../component/SectionSingleHero.jsx';
import SectionArticle from '../component/SectionArticle.jsx';
import SectionSingleImg from '../component/SectionSingleImg.jsx';


function LayoutSingle({content}) {
   
    return (
      <main className="flex  flex-col items-center justify-between py-16 pt-24 px-5  xl:px-8">
        <SectionSingleHero content={content}/>
        <SectionArticle content={content}/>
        {/* <HeaderSection text={content}/> */}
        <SectionSingleImg content={content}/>
        
       
      </main>
    );
}

export default LayoutSingle
