import UnderConstruction from "../components/UnderConstruction";
import { useAppContext } from "../contexts/AppContext";

const Contact = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "contact active" : "contact"}`}>
      <header>
        <h2 className='h2 article-title'>Contact</h2>
      </header>
      <UnderConstruction />
    </article>
  );
};
export default Contact;
