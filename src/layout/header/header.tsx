import React from "react";
import styled from "styled-components";
import { Logo } from "components/logo/logo";
import { Menu } from "components/menu/menu";
import { SocialIcons } from "components/social-icons/social-icons";
import { Container } from "components/common/container";
import { FlexWrapper } from "components/common/flex-wrapper";
import { theme } from "assets/styles/theme";

const menuItems = ["home", "about", "tech stack", "projects", "contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <Logo />
          <Menu menuItems={menuItems} />
          <SocialIcons />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
`;
