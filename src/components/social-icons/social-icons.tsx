import React from "react";
import styled from "styled-components";
import { Icon } from "components/icon/icon";

export const SocialIcons = () => {
  return (
    <SocialIconsList>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"social-github"} viewBox={"0 0 30 30"} height={"30px"} width={"30px"} />
          <Icon iconId={"social-linkedin"} viewBox={"0 0 30 30"} height={"30px"} width={"30px"} />
        </SocialLink>
      </SocialItem>
    </SocialIconsList>
  );
};

const SocialIconsList = styled.ul``;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
