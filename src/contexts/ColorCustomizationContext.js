import React, { createContext, useState, useContext, useEffect } from 'react';
import P from 'prop-types';
import { useColorMode } from './ColorModeContext';
import  { useTheme } from 'styled-components';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const defaultColors = {
    light: {
      primary: theme.colors.primaryColor,
      secondary: theme.colors.secondaryColor,
      gradient: {
        from: theme.colors.gradientColors.light.from,
        via: theme.colors.gradientColors.light.via,
        to: theme.colors.gradientColors.light.to,
      },
    },
    dark: {
      primary: theme.colors.secondaryColor,
      secondary: theme.colors.primaryColor,
      gradient: {
        from: theme.colors.gradientColors.dark.from,
        via: theme.colors.gradientColors.dark.via,
        to: theme.colors.gradientColors.dark.to,
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
