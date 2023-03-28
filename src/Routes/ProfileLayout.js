import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import { Wrapper } from "../styles/App.styled";
const ProfileLayout = () => {
  return (
    <>
      <Wrapper size="2">
        <Sidebar />
        <Profile />
        <BottomNav />
      </Wrapper>
    </>
  );
};

export default ProfileLayout;
