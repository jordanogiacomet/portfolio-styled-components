// src/styles/render-theme.js
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ColorModeProvider } from '../contexts/ColorModeContext'; 
import { ColorProvider } from '../contexts/ColorCustomizationContext'; 
import { theme } from './theme';
import { GlobalStyles } from './global-styles';
import { act } from 'react';

export const renderTheme = (children) => {
  let result;
  act(() => {
    result = render(
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <ColorModeProvider>
            <ColorProvider>
              <GlobalStyles />
              {children}
            </ColorProvider>
          </ColorModeProvider>
        </LanguageProvider>
      </ThemeProvider>
    );
  });
  return result;
};
