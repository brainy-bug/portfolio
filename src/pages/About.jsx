import Services from "../components/Services";
import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <header>
        <h2 className='h2 article-title'>About me</h2>
      </header>

      <section className='about-text'>
        <p>
          Hello 👋, I am a frontend developer with a specialization in React and
          a graphic designer hailing from Lagos, Nigeria. I enjoy turning
          complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          I design websites that are both practical and visually appealing, with
          a personal touch. My goal is to showcase your message and identity in
          the most creative way possible.
        </p>
      </section>
      <Services />
    </article>
  );
};
export default About;
