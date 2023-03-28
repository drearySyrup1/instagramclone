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
  //max width without vertical scrollbar
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  color: ${({ theme }) => theme.textColor};

}
`;
