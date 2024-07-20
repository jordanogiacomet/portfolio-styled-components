// src/styles/render-theme.js
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ColorModeProvider } from '../contexts/ColorModeContext'; // ajuste o caminho conforme necessário
import { ColorCustomizationProvider } from '../contexts/ColorCustomizationContext'; // ajuste o caminho conforme necessário
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
            <ColorCustomizationProvider>
              <GlobalStyles />
              {children}
            </ColorCustomizationProvider>
          </ColorModeProvider>
        </LanguageProvider>
      </ThemeProvider>
    );
  });
  return result;
};
