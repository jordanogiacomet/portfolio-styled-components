// src/components/ColorModeToggleButton.js
import React from 'react';
import { useColorMode } from '../../contexts/ColorModeContext';
import * as Styled from './styles'
import P from 'prop-types';

const ColorModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleClick = () => {
    toggleColorMode();
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.Container onClick={handleClick} className={colorMode}>
      {colorMode === 'light' ? 'LIGHT' : 'DARK'}
    </Styled.Container>
    
  );
};

ColorModeToggleButton.propTypes = {
  className: P.string
};

export default ColorModeToggleButton;
 