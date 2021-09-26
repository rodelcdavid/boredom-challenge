import styled, { createGlobalStyle, keyframes } from "styled-components";
// outline: 1px solid #f00 !important;

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #e5e5e5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyle;

const fadeInContent = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const MainWrapper = styled.div`
  text-align: center;
  padding: 0.8rem;
  color: black;
  animation: 1s ${fadeInContent} ease-in;

  /* & h1 {
        width: 50%;
        margin: 0 auto;
    } */
`;
