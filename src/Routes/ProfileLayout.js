import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import { useDynamicGridSize } from "../customhooks/useDynamicGridSize";
import { Wrapper } from "../styles/App.styled";
const ProfileLayout = () => {
  useDynamicGridSize(2);
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfileLayout;
