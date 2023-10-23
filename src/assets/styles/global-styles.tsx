import { createGlobalStyle } from "styled-components";
import { theme } from "assets/styles/theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family:'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.primaryFont};
    line-height: 1.2;
  }
  
  a{
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }
  
  button{
    background-color: unset;
    border: none;
  }
  
`;
