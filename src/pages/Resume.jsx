import React from "react";
import Skills from "../components/Portfolio/Skills";
import UnderConstruction from "../components/UnderConstruction";
import Education from "../components/Education";
import { useAppContext } from "../contexts/AppContext";

const Resume = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "resume active" : "resume"}`}>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <UnderConstruction />
      {/* <Education /> */}
      {/* <Experience/> */}
      {/* <Skills/> */}
    </article>
  );
};

export default Resume;
