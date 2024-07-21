import { motion } from 'framer-motion';
import { useParallax } from '../../contexts/ParallaxContext';
import P from 'prop-types';

export const Parallax = ({ children, speed }) => {
  const { offsetY } = useParallax();

  return(
    <motion.div style={{ transform: `translateY(${offsetY * speed}px)` }}>
      {children}
    </motion.div>
  );
};

Parallax.propTypes = {
  children: P.node.isRequired,
  speed: P.number,
};