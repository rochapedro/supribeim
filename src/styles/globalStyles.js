import styled, { createGlobalStyle } from 'styled-components';

export const Media = {
  max_800: '@media(max-width:800px)',
  min_576: '@media(min-width:576px)',
  min_768: '@media(min-width:768px)',
  min_992: '@media(min-width:992px)', 
  min_1200: '@media(min-width:1200px)', 
  min_1400: '@media(min-width:1400px)'
}

export const GlobalStyled = createGlobalStyle`
  
  html {
    overflow: hidden;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Poppins", sans-serif;
  }
`;