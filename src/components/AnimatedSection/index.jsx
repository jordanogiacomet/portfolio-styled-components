import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import P from 'prop-types';

export const AnimatedSection = ({ children, x = 0, y = 20, duration = 0.6 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, y: 0, transition: { duration } },
        hidden: { opacity: 0, x, y }
      }}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: P.node.isRequired,
  x: P.number,
  y: P.number,
  duration: P.number,
};
