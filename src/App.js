import { GlobalStyle } from "./styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { themeObject } from "./styles/theme";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

import styled from "styled-components";
import Suggestions from "./components/Suggestions";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.2fr;
  grid-auto-rows: 1fr;
  height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider
        theme={
          theme === "light" ? themeObject.light : themeObject.dark
        }
      >
        <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <Main />
          <Suggestions />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
