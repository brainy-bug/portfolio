import ContactForm from "../components/contactForm";
import Map from "../components/Map";
import { useAppContext } from "../contexts/AppContext";

const Contact = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "contact active" : "contact"}`}>
      <header>
        <h2 className='h2 article-title'>Get in touch</h2>
      </header>
      <Map />
      <ContactForm />
    </article>
  );
};
export default Contact;
