import React from "react";
import styled from "styled-components";
import { SocialIcons } from "components/social-icons/social-icons";
import { Logo } from "components/logo/logo";
import { FlexWrapper } from "components/common/flex-wrapper";
import { TabMenu } from "layout/sections/projects/tab-menu/tab-menu";

const menuItems = ["home", "about", "tech stack", "projects", "contact"];

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify={"space-between"}>
        <Logo />
        <PhoneNumber>+375 29 7641859</PhoneNumber>
        <Email>karunny.alex@gmail.com</Email>
        <SocialIcons />
      </FlexWrapper>
      <DividingStrip></DividingStrip>
      <FlexWrapper justify={"space-between"}>
        <TabMenu menuItems={menuItems} />
        <Copyright>© 2023, Alex Karunny</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;
const PhoneNumber = styled.span``;
const Email = styled.span``;
const DividingStrip = styled.div`
  border: 2px solid #42446e;
`;
const Copyright = styled.small``;
