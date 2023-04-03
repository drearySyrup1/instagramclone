import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main";
import Suggestions from "../components/Suggestions";
import { useDynamicGridSize } from "../customhooks/useDynamicGridSize";

const IndexLayout = () => {
  useDynamicGridSize(3);

  return (
    <>
      <Main />
      <Suggestions />
      <Outlet />
    </>
  );
};

export default IndexLayout;
