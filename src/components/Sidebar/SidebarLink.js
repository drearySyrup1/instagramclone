import React from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0.9rem 1rem;
  gap: 15px;
  border-radius: 50px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 200ms;
  color: ${({ theme }) => theme.textColor};

  & svg {
    font-size: 1.4rem;
    transition: scale 200ms;
  }

  &:hover {
    background-color: ${({ theme }) => theme.sidebarLinkHoverBg};
  }

  &:hover svg {
    scale: 1.2;
  }

  &:active {
    background-color: hsl(0 0% 99%);
    color: hsl(0 0% 60%);
  }

  &:active svg {
    scale: 0.9;
  }
`;

const SidebarLink = ({ className, children }) => {
  return <StyledLink className={className}>{children}</StyledLink>;
};

export default SidebarLink;
