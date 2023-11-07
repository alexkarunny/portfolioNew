import React from "react";
import styled from "styled-components";
import { theme } from "assets/styles/theme";

type Props = {
  menuItems: string[];
};

export const TabMenu: React.FC<Props> = ({ menuItems }) => {
  return (
    <StyledTabMenu>
      <ul>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={"##"}>{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    justify-content: center;
    display: flex;
    gap: 20px;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  padding: 0 10px;
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
  color: ${theme.colors.secondaryFont};

  position: relative;
  z-index: 1;

  &:before {
    content: "";
    display: inline-block;
    background-image: linear-gradient(to right, ${theme.colors.primaryAccent}, ${theme.colors.secondaryAccent});

    position: absolute;
    left: 0;
    right: 0;
    bottom: 3px;
    z-index: 0;
  }

  &:hover {
    &:before {
      height: 5px;
    }
  }
`;
