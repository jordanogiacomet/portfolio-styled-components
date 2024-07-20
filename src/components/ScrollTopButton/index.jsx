import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';
import * as Styled from './styles';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { gradientColors } = useColorCustomization();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.Button
      via={gradientColors.via}
      to={gradientColors.to}
      onClick={scrollToTop}
      isVisible={isVisible}
    >
      <ArrowUpIcon />
    </Styled.Button>
  );
};

export default ScrollToTopButton;
