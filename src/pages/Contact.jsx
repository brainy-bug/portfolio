import React from "react";
import ContactForm from "../components/Contact/contactForm";
import Map from "../components/Map";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

import { useAppContext } from "../contexts/AppContext";

const Contact = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "contact active" : "contact"}`}>
      <header>
        <FadeInWhenVisible>
          <h2 className='h2 article-title'>Get in touch</h2>
        </FadeInWhenVisible>
      </header>
      <FadeInWhenVisible>
        <Map />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ContactForm />
      </FadeInWhenVisible>
    </article>
  );
};

export default Contact;
