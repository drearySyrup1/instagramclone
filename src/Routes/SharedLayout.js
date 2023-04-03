import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav/BottomNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { Wrapper } from "../styles/App.styled";
import { GlobalStyle } from "../styles/GlobalStyles.styled";

const SharedLayout = () => {
  const { wrapperGridSize } = useSelector((state) => state.global);

  console.log(wrapperGridSize);
  return (
    <>
      <GlobalStyle />
      <Wrapper size={String(wrapperGridSize)}>
        <Sidebar />
        <BottomNav />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default SharedLayout;
