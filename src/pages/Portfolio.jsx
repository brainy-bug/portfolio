import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import { useAppContext } from "../contexts/AppContext";

import Projects from "../components/Portfolio/Projects";

const Portfolio = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "portfolio active" : "portfolio"}`}>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>
      <Projects />
      <UnderConstruction />
    </article>
  );
};

export default Portfolio;
