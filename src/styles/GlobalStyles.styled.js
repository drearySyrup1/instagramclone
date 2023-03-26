import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*,*::before,*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif;
  background-color: ${({ theme: { bg } }) => bg};
  width: 100vw;
  height: 100vh;
}
`;
