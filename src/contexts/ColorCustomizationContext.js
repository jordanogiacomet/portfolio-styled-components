import React, { createContext, useState, useContext, useEffect } from 'react';
import P from 'prop-types';
import { useColorMode } from './ColorModeContext';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const { colorMode } = useColorMode();
  const defaultColors = {
    light: {
      primary: '#000000',
      secondary: '#FFFFFF',
      gradient: {
        from: '#4169E1',
        via: '#2B6DE1',
        to: '#00008B'
      }
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#000000',
      gradient: {
        from: '#1E90FF',
        via: '#4169E1',
        to: '#00008B'
      }
    }
  };

  const [primaryColor, setPrimaryColor] = useState(defaultColors[colorMode].primary);
  const [secondaryColor, setSecondaryColor] = useState(defaultColors[colorMode].secondary);
  const [gradientColors, setGradientColors] = useState(defaultColors[colorMode].gradient);

  useEffect(() => {
    setPrimaryColor(defaultColors[colorMode].primary);
    setSecondaryColor(defaultColors[colorMode].secondary);
    setGradientColors(defaultColors[colorMode].gradient);
  }, [colorMode]);

  return (
    <ColorContext.Provider value={{  
      primaryColor, setPrimaryColor,
      secondaryColor, setSecondaryColor,
      gradientColors, setGradientColors,
    }}>
      {children}
    </ColorContext.Provider>
  );
};

ColorProvider.propTypes = {
  children: P.node.isRequired,
};

export const useColorCustomization = () => useContext(ColorContext);
