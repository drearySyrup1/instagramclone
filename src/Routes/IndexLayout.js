import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import Suggestions from "../components/Suggestions";
import { Wrapper } from "../styles/App.styled";
const IndexLayout = () => {
  return (
    <>
      <Wrapper size="3">
        <Sidebar />
        <Main />
        <Suggestions />
        <BottomNav />
      </Wrapper>
    </>
  );
};

export default IndexLayout;
