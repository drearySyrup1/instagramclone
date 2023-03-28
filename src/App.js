import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { themeObject } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Routes/SharedLayout";
import IndexLayout from "./Routes/IndexLayout";
import ProfileLayout from "./Routes/ProfileLayout";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider
        theme={
          theme === "light" ? themeObject.light : themeObject.dark
        }
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<IndexLayout />} />
            <Route path="profile" element={<ProfileLayout />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
