import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";
import { useRouter } from "next/navigation";

function ProjectCard({ project, index }) {
  const router = useRouter();
  console.log("project", project);
  console.log("index", index);

  return (
    <motion.div
      variants={fadeIn(`${index % 2 == 0 ? "up" : "up"}`, 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className={`${
        index % 4 == 1 || index % 4 == 2 ? "Card1col" : "Card2col"
      }`}
      onClick={() => {
        router.push(`/projects/${index}`);
      }}
      //   className={
      //     `
      //    ${index %4 == 0 || index%4==3 ? "flex flex-col gap-4 lg:basis-1/3 lg:w-1/3 xl:basis-7/12 shrink grow xl:w-2/3"
      //    : "flex flex-col gap-4 lg:basis-1/3 lg:w-1/3 xl:basis-2/12 shrink grow xl:w-1/3"} ` }
      //   className={
      //     `
      //   ${
      //     index % 2 == 0
      //       ? "flex flex-col gap-4 lg:basis-1/3 lg:w-1/3 xl:basis-7/12 shrink grow xl:w-2/3"
      //       : "flex flex-col gap-4 lg:basis-1/3 lg:w-1/3 xl:basis-2/12 shrink grow xl:w-1/3"
      //   } ` }
    >
      <div className="imgCardOutterWrap">
        <div className="imgCardWrap">
          <Image
            className="imgCard"
            src={project.imageMain}
            alt={project.title}
            width={1200}
            height={1200}
          />
        </div>
        <div className="readMoreBoxWrap">
          <div className="readMoreBoxText">read more</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <FaArrowRight
            className=" -rotate-45 fill-[var(--primary-color)]"
            // className=" -rotate-45 fill-[var(--secondary-color)]"
            size={"1.5rem"}
          />
        </div>
        <p className="text-xl">{project.subtitle}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
