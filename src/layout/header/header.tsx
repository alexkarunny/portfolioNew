import React from "react";
import styled from "styled-components";
import { Logo } from "components/logo/logo";
import { SocialIcons } from "components/social-icons/social-icons";
import { Container } from "components/common/container";
import { FlexWrapper } from "components/common/flex-wrapper";
import { theme } from "assets/styles/theme";
import { HeaderMenu } from "layout/header/header-menu/header-menu";

const menuItems = ["home", "about", "tech stack", "projects", "contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <Logo />
          <HeaderMenu menuItems={menuItems} />
          <SocialIcons />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding-top: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;
