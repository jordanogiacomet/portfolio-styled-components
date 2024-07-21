import { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';

const ParallaxContext = createContext();

export const useParallax = () => useContext(ParallaxContext);

export const ParallaxProvider = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContext.Provider value={{ offsetY }}>
      {children}
    </ParallaxContext.Provider>
  );
};

ParallaxProvider.propTypes = {
  children: P.node.isRequired,
};