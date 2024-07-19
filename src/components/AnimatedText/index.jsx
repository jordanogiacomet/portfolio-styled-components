import { useEffect } from 'react';
import { useColorMode } from '../../contexts/ColorModeContext';
import * as Styled from './styles';

export const AnimatedText = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const animatedTextElement = document.querySelector('.animated-text');
    if (colorMode === 'light') {
      animatedTextElement.classList.add('light');
      animatedTextElement.classList.remove('dark');
    } else {
      animatedTextElement.classList.add('dark');
      animatedTextElement.classList.remove('light');
    }
  }, [colorMode]);

  return (
    <Styled.Container
      className="animated-text"
      sequence={[
        'Jordano',
        1000,
        'Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

AnimatedText.propTypes = {};
