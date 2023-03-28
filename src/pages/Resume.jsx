import UnderConstruction from "../components/UnderConstruction";
import Education from "../components/Education";
import Skills from "../components/Skills";
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
