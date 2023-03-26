import React from "react";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsSearch, BsHeart, BsPlusSquare } from "react-icons/bs";
import styled from "styled-components";
import SidebarLink from "./SidebarLink";

const StyledSidebar = styled.div`
  background-color: "#fff";
  display: grid;
  /* width: 245px; */
  padding: 2rem 0.7rem;
  gap: 8px;
  grid-auto-rows: max-content;
  color: ${({ theme }) => theme.textColor};
  border-right: 1px solid ${({ theme }) => theme.sidebarBorderColor};
`;

const Instagram = styled.h1`
  font-size: 1.3em;
  padding-left: 1rem;
  margin-bottom: 30px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode",
    "Lucida Grande", "Lucida Sans", Arial, sans-serif;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Instagram>Instagram</Instagram>
      <SidebarLink>
        <MdHomeFilled />
        Home
      </SidebarLink>
      <SidebarLink>
        <BsSearch />
        Search
      </SidebarLink>
      <SidebarLink>
        <MdOutlineExplore />
        Expore
      </SidebarLink>
      <SidebarLink>
        <MdOutlineSlowMotionVideo />
        Reels
      </SidebarLink>
      <SidebarLink>
        <RiMessengerLine />
        Messages
      </SidebarLink>
      <SidebarLink>
        <BsHeart />
        Notifications
      </SidebarLink>
      <SidebarLink>
        <BsPlusSquare />
        Create
      </SidebarLink>
      <SidebarLink>
        <MdHomeFilled />
        Profile
      </SidebarLink>
      <SidebarLink className="more">
        <MdHomeFilled />
        More
      </SidebarLink>
    </StyledSidebar>
  );
};

export default Sidebar;
