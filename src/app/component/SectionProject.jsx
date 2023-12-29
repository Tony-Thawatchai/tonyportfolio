import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";
import { project } from "../content/project/project.js";
import ProjectCard from "./ProjectCard.jsx";
import HeaderSection from "./HeaderSection.jsx";

function SectionProject() {
  return (
    <section id="projects" className="section max-w-[1300px] items-start  flex flex-col gap-6 'mt-24' pt-24 mb-24 'xl:mt-32' xl:pt-32 ">
      {/* <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="text-5xl md:text-[64px] font-bold "
      >
        Projects<span className=" text-[var(--secondary-color)] ">.</span>
      </motion.h2> */}
      <HeaderSection text="Projects"/>
      <motion.div className="cardWrap">

        {project.map((project,index) => (
          <ProjectCard project={project} key={index} index={index}/>
        ))}
      </motion.div>
    </section>
  );
}

export default SectionProject;
