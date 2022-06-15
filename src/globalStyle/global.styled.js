import { createGlobalStyle } from "styled-components";
import { VARS } from "../components/constants";
import BG from "../assets/bg.svg";

export const GlobalStyles = createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css2?family=Nunito"); */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${VARS.btnDarkBG};
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    color: ${VARS.primaryFontLight}
  }
  image, svg, picture {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  input, button, textarea, select {
    font: inherit
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  p, h1, h2, h3 {
    overflow: break-word;
  }
  #root, #__next {
  isolation: isolate;
}
`;
