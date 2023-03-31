import React from "react";
import Fade from "react-reveal/Fade";
import AnimatedSection from "../components/AnimatedSection";
import Services from "../components/Portfolio/Services";

import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <AnimatedSection>
        <header>
          <h2 className='h2 article-title'>About me</h2>
        </header>

        <section className='about-text'>
          <p>
            Hello 👋, I am a frontend developer with a specialization in React
            and a graphic designer hailing from Lagos, Nigeria. I enjoy turning
            complex problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            I design websites that are both practical and visually appealing,
            with a personal touch. My goal is to showcase your message and
            identity in the most creative way possible.
          </p>
        </section>
      </AnimatedSection>

      <Fade bottom duration={1000} delay={500}>
        <Services />
      </Fade>
    </article>
  );
};
export default About;
