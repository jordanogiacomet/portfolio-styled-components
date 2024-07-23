import * as Styled from './styles';
import { useEffect } from 'react';
import { useColorMode } from '../../contexts/ColorModeContext';

export const ParallaxBackground = () => {
  const { colorMode } = useColorMode();
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const parallaxElement = document.querySelector('#parallax-element');
    const offset = scrollPosition * 0.5;
    parallaxElement.style.transform = `translateY${offset}px`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Styled.ParallaxContainer>
      <Styled.ParallaxElement id='parallax-element' className={colorMode} />
    </Styled.ParallaxContainer>
  );
};

ParallaxBackground.propTypes = {

};