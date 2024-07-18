import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <StyledButton onClick={scrollToTop} isVisible={isVisible}>
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
  background-color: #4169E1;
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
  &:hover {
    transition: ease-in-out 0.3s;
    background-color: #00008B;
  }
`;

export default ScrollToTopButton;
