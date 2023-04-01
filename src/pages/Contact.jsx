import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Map";
import AnimatedSection from "../components/AnimatedSection";

import { useAppContext } from "../contexts/AppContext";

const Contact = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "contact active" : "contact"}`}>
      <header>
        <AnimatedSection>
          <h2 className='h2 article-title'>Get in touch</h2>
        </AnimatedSection>
      </header>
      <AnimatedSection>
        <Map />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </article>
  );
};

export default Contact;
