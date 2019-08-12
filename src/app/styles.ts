import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div#app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    display: flex;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
