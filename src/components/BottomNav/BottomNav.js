import React from "react";
import { BsHeart, BsPlusSquare, BsSearch } from "react-icons/bs";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import styled from "styled-components";
import { mediaSizes } from "../../mediaSizes";
import { PhotoCircle } from "../Main/Main";

const StyledBottomNav = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.bottomNavBg};
  width: 100%;
  padding: 0.7rem;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid hsl(0, 0%, 85%);

  & svg {
    font-size: 1.5rem;
  }

  @media (width >= ${mediaSizes.SS}) {
    display: none;
  }
`;

const BottomNav = () => {
  return (
    <StyledBottomNav>
      <MdHomeFilled />
      <MdOutlineExplore />
      <MdOutlineSlowMotionVideo />
      <BsPlusSquare />
      <RiMessengerLine />
      <PhotoCircle size="1.5rem" />
    </StyledBottomNav>
  );
};

export default BottomNav;
