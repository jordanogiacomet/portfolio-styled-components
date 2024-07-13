import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { act } from 'react'; // Importando act do react

export const renderTheme = (children) => {
  let result;
  act(() => {
    result = render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
  });
  return result;
};