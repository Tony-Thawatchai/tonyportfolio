import React from "react";
import HeaderSection from "./HeaderSection";
import TabExperience from "./TabExperience";

function SectionExperience() {
  return (
    <section
      
      className="section max-w-[1300px] items-start  flex flex-col gap-6 'mt-24' pt-24 mb-24 'xl:mt-32' xl:pt-32  "
    >

        <HeaderSection text="Experience" />
        <TabExperience />
    </section>
  );
}

export default SectionExperience;
