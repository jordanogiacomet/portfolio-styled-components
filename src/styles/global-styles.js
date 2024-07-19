import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
    scroll-behavior: smooth !important;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif !important;
  }
  /* src/App.css */
body.light {
  --background-color: #D4D9DE;
  --text-color: black;
}

body.dark {
  --background-color: black;
  --text-color: white;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif !important;
  }

  button, input, textarea {
    font-family: 'Montserrat', sans-serif;
    &::placeholder{
      font-family: 'Montserrat', sans-serif;
    }
  }

  h2, h3, h4, h5, h6{
    @media(max-width: 400px) {
      font-size: 2.3rem !important;
    }
  }
`;



