import AnimatedSection from "../components/AnimatedSection";
import Services from "../components/Portfolio/Services";
import Testimonials from "../components/Testimonials";

import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <header>
        <AnimatedSection>
          <h2 className='h2 article-title'>About me</h2>
        </AnimatedSection>
      </header>
      <section className='about-text'>
        <AnimatedSection>
          <p>
            Hello 👋, I am a frontend developer with a specialization in React
            and a graphic designer hailing from Lagos, Nigeria. I enjoy turning
            complex problems into simple, beautiful and intuitive designs.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <p>
            I design websites that are both practical and visually appealing,
            with a personal touch. My goal is to showcase your message and
            identity in the most creative way possible.
          </p>
        </AnimatedSection>
      </section>
      <Services />
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
    </article>
  );
};
export default About;
