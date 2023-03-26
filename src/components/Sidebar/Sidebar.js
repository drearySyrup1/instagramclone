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

  @media (width <= 1160px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Instagram>Instagram</Instagram>
      <SidebarLink>
        <MdHomeFilled />
        <span>Home</span>
      </SidebarLink>
      <SidebarLink>
        <BsSearch />
        <span>Search</span>
      </SidebarLink>
      <SidebarLink>
        <MdOutlineExplore />
        <span>Expore</span>
      </SidebarLink>
      <SidebarLink>
        <MdOutlineSlowMotionVideo />
        <span>Reels</span>
      </SidebarLink>
      <SidebarLink>
        <RiMessengerLine />
        <span>Messages</span>
      </SidebarLink>
      <SidebarLink>
        <BsHeart />
        <span>Notifications</span>
      </SidebarLink>
      <SidebarLink>
        <BsPlusSquare />
        <span>Create</span>
      </SidebarLink>
      <SidebarLink>
        <MdHomeFilled />
        <span>Profile</span>
      </SidebarLink>
      <SidebarLink className="more">
        <MdHomeFilled />
        <span>More</span>
      </SidebarLink>
    </StyledSidebar>
  );
};

export default Sidebar;
