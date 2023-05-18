import React from "react";
import Skills from "../components/Portfolio/Skills";
import UnderConstruction from "../components/UnderConstruction";
import Education from "../components/Education";
import Experience from "../components/Resume/Experience";
import { useAppContext } from "../contexts/AppContext";
import AnimatedSection from "../components/Animations/AnimatedSection";

const Resume = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "resume active" : "resume"}`}>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      {/* <UnderConstruction /> */}
      <AnimatedSection>
        <Education />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
    </article>
  );
};
export default Resume;
