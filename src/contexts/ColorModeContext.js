import React, { createContext, useState, useContext, useEffect } from 'react';
import P from 'prop-types';

const ColorModeContext = createContext();

export const ColorModeProvider = ({children}) => {
  const [colorMode, setColorMode] = useState(() => {
    const savedColorMode = localStorage.getItem('colorMode');
    return savedColorMode ? JSON.parse(savedColorMode) : 'light';
  });

  const toggleColorMode = () => {
    setColorMode((prevColorMode) => (prevColorMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('colorMode', JSON.stringify(colorMode));
    document.body.className = colorMode;
  }, [colorMode]);

  return(
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>{children}</ColorModeContext.Provider>
  );
};

ColorModeProvider.propTypes = {
  children: P.node.isRequired,
};

export const useColorMode = () => useContext(ColorModeContext);