import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import { useAppContext } from "../contexts/AppContext";

import Projects from "../components/Portfolio/Projects";
import AnimatedSection from "../components/AnimatedSection";

const Portfolio = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "portfolio active" : "portfolio"}`}>
      <header>
        <AnimatedSection>
          <h2 className='h2 article-title'>Portfolio</h2>
        </AnimatedSection>
      </header>
      <AnimatedSection>
        <Projects />
        <UnderConstruction />
      </AnimatedSection>
    </article>
  );
};

export default Portfolio;
