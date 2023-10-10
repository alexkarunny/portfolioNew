import React from "react";
import styled from "styled-components";
import { Logo } from "components/logo/logo";
import { Menu } from "components/menu/menu";

const menuItems = ["home", "about", "tech stack", "projects", "contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #917b7b;
  display: flex;
  justify-content: space-between;
`;
