import React, {useState}from "react";
// import UnderConstruction from "../components/UnderConstruction";
import { useAppContext } from "../contexts/AppContext";

import Projects from "../components/Portfolio/Projects";
import FilterSelectBox from "../components/Filters/FilterSelectBox";
import AnimatedSection from "../components/AnimatedSection";
import { useFilterContext } from "../contexts/FilterContext";

const Portfolio = () => {
  const { isPageActive } = useAppContext();
  const { categories } = useFilterContext();

  return (
    <article className={`${!isPageActive ? "portfolio active" : "portfolio"}`}>
      <header>
        <AnimatedSection>
          <h2 className='h2 article-title'>Portfolio</h2>
        </AnimatedSection>
      </header>
      <AnimatedSection>
        {categories.length > 1 && <FilterSelectBox />}
        <Projects />
      </AnimatedSection>
    </article>
  );
};

export default Portfolio;
