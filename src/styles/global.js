import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body, html {
    background: #eee;
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
  }
  button {
    outline: none;
    border: none;
  }
  a {
    outline: none;
    border: none;
    text-decoration: none
  }
  ul, ol, li {
    list-style: none;
  }
`;
