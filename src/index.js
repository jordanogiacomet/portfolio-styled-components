import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { ThemeProvider } from 'styled-components'; 
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import { LanguageProvider } from './contexts/LanguageContext';
import { ColorModeProvider } from './contexts/ColorModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Home />
        <GlobalStyles />
      </LanguageProvider>
    </ThemeProvider>
    </ColorModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

