import { ContactForm, Map } from "../components/PageSections/ContactSection";
import FadeIn from "../components/FadeIn";

import { useAppContext } from "../contexts/AppContext";

const Contact = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "contact active" : "contact"}`}>
      <header>
        <FadeIn>
          <h2 className='h2 article-title'>Get in touch</h2>
        </FadeIn>
      </header>
      <FadeIn>
        <Map />
      </FadeIn>
      <FadeIn>
        <ContactForm />
      </FadeIn>
    </article>
  );
};

export default Contact;
