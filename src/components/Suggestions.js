import React from "react";
import styled from "styled-components";
import { PhotoCircle } from "./Main/Main";

const RightSideBar = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 15px;
  padding: 2rem 0.5rem;
  font-size: 0.75rem;

  @media (width <= 1025px) {
    display: none;
  }
`;
const Profile = styled.div`
  display: flex;
  height: min-content;
  align-items: center;
  gap: 10px;

  & > div {
    display: grid;
  }
`;
const Footer = styled.div``;

const Suggestions = () => {
  return (
    <>
      <RightSideBar>
        <Profile>
          <PhotoCircle size="60"></PhotoCircle>
          <div>
            <span className="bold">aurimas.2</span>
            <span className="grey">Aurimas Gaizauskas</span>
          </div>
        </Profile>
        <Footer>
          <span className="grey">
            © 2023 DINSTA FROM drearySyrup1
          </span>
        </Footer>
      </RightSideBar>
    </>
  );
};

export default Suggestions;
