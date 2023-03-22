import { useEffect } from "react";
import Services from "../components/Services";
import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  useEffect(() => {
    alert(
      `Welcome to my portfolio website!🥰
      
Kindly note that the website is still under construction. Thank you for your patience! 🤗🤗`
    );
  }, []);

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
          My job is to build your website so that it is functional and
          user-friendly but at the same time, attractive. Moreover, I add
          personal touch to your product and make sure it is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </section>
      <Services />
    </article>
  );
};
export default About;
