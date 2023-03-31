import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return <div ref={ref}>{inView && <Fade>{children}</Fade>}</div>;
};

export default AnimatedSection;
