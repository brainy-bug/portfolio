import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
