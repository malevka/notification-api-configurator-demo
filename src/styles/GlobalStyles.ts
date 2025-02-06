"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: rgba(255, 255, 255, 0.87);
    --foreground: #213547;
    --output-background: #f4f4f4;
    --button-primary-bg: #1677ff
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #242424;
      --foreground: white;
      --output-background: #3b3b3b;
      --button-primary-bg: #1677ff;
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: var(--foreground);
    background-color: var(--background);
    font-family: system-ui, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

`;

export default GlobalStyles;
