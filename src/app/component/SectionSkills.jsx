import React from "react";
import HeaderSection from "./HeaderSection";

function SectionSkills() {
  return (
    <section className="section max-w-[1300px] items-start  flex flex-col gap-6 gap-x-8 'mt-24' pt-24 mb-24 'xl:mt-32' xl:pt-32 ">
      <HeaderSection text="Skills" />
      <div className="w-full gap-4 gap-y-8 grid grid-cols-2 md:grid-cols-2 'lg:grid-cols-3' xl:grid-cols-4">
        <article className="flex flex-col gap-4 col-1">
          <h3 className="font-bold text-xl">Design</h3>
          <div className=" text-lg flex flex-col gap-2 ">
            <p>UX/UI Design</p>
            <p>Figma</p>
            <p>Adobe Creative Suite</p>
          </div>
        </article>
        <article className="flex flex-col gap-4 col-1">
          <h3 className="font-bold text-xl">Frontend</h3>
        <div className=" text-lg flex flex-col gap-2 ">
            <p>Javascript</p>
            <p>React</p>
            <p>React Native</p>
            <p>Next.js</p>
            <p>CSS/SASS</p>
          </div>
        </article>
        <article className="flex flex-col gap-4 col-1">
          <h3 className="font-bold text-xl">Backend</h3>
          <div className=" text-lg flex flex-col gap-2 ">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MondoDB</p>
            <p>PHP</p>
          </div>
        </article>
        <article className="flex flex-col gap-4 col-1">
          <h3 className="font-bold text-xl">Content Managemnt System</h3>
        <div className=" text-lg flex flex-col gap-2 ">
            <p>Joomla</p>
            <p>Wordpress</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionSkills;
