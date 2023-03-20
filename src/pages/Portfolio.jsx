import UnderConstruction from "../components/UnderConstruction";
import { useAppContext } from "../contexts/AppContext";

const Portfolio = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "portfolio active" : "portfolio"}`}>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>
      <UnderConstruction />
    </article>
  );
};
export default Portfolio;
