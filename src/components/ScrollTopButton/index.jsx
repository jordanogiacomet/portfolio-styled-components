import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

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
    <StyledButton via={gradientColors.via} to={gradientColors.to} onClick={scrollToTop} isVisible={isVisible}>
      <ArrowUpIcon />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: fixed;
  bottom: 10rem;
  left: 4rem;
  width: 40px;
  height: 40px;
  ${({ via, to }) => css`
    background-color: ${via};
    &:hover {
    transition: ease-in-out 0.3s;
    background-color: ${to};
  }
  `}
  
  color: white;
  border: none;
  border-radius: 50%;
  z-index: 99999999;
  padding: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s, background-color 0.3s;
  @media(max-width: 768px){
    display: none;
  }

`;

export default ScrollToTopButton;
