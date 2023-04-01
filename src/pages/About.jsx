import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Services from "../components/Portfolio/Services";

import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <header>
        <FadeInWhenVisible>
          <h2 className='h2 article-title'>About me</h2>
        </FadeInWhenVisible>
      </header>
      <section className='about-text'>
        <FadeInWhenVisible>
          <p>
            Hello 👋, I am a frontend developer with a specialization in React
            and a graphic designer hailing from Lagos, Nigeria. I enjoy turning
            complex problems into simple, beautiful and intuitive designs.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p>
            I design websites that are both practical and visually appealing,
            with a personal touch. My goal is to showcase your message and
            identity in the most creative way possible.
          </p>
        </FadeInWhenVisible>
      </section>

      <Services />
    </article>
  );
};
export default About;
