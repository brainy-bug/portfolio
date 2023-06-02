import FadeIn from "../components/FadeIn";
// import UnderConstruction from "../components/UnderConstruction";

import {
  Projects,
  FilterSelectBox,
} from "../components/PageSections/ProjectSection";

import { useFilterContext } from "../contexts/FilterContext";
import { useAppContext } from "../contexts/AppContext";

const Portfolio = () => {
  const { isPageActive } = useAppContext();
  const { categories } = useFilterContext();

  return (
    <article className={`${!isPageActive ? "portfolio active" : "portfolio"}`}>
      <header>
        <FadeIn>
          <h2 className='h2 article-title'>Projects</h2>
        </FadeIn>
      </header>
      {categories.length > 1 && <FilterSelectBox />}
      <Projects />
    </article>
  );
};

export default Portfolio;
