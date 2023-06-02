import FadeIn from "../components/FadeIn";
import {
  Clients,
  Services,
  Testimonials,
} from "../components/PageSections/AboutSection";

import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <header>
        <FadeIn>
          <h2 className='h2 article-title'>About me</h2>
        </FadeIn>
      </header>
      <section className='about-text'>
        <FadeIn>
          <p>
            Hello 👋, I am a frontend developer with a specialization in React
            and a graphic designer hailing from Lagos, Nigeria. I enjoy turning
            complex problems into simple, beautiful and intuitive designs.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            I design websites that are both practical and visually appealing,
            with a personal touch. My goal is to showcase your message and
            identity in the most creative way possible.
          </p>
        </FadeIn>
      </section>
      <Services />
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Clients />
      </FadeIn>
    </article>
  );
};
export default About;
