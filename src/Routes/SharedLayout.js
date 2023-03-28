import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyles.styled";

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};

export default SharedLayout;
