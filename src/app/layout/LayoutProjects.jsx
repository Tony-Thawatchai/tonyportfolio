import React from 'react'
import SectionSingleHero from '../component/SectionSingleHero.jsx';
import SectionArticle from '../component/SectionArticle.jsx';
import SectionSingleImg from '../component/SectionSingleImg.jsx';
import SectionProject from '../component/SectionProject.jsx';


function LayoutProjects() {
    return (
        <main className="flex  flex-col items-center justify-between py-16 pt-24 px-5  xl:px-8">
          <SectionProject/>
          
         
        </main>
      );
}

export default LayoutProjects
