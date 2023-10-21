import React from "react";
import styled from "styled-components";
import { theme } from "assets/styles/theme";

type Props = {
  menuItems: string[];
};

export const HeaderMenu: React.FC<Props> = ({ menuItems }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={"##"}>
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: right;
  }
`;

const Link = styled.a`
  text-transform: capitalize;
  color: transparent;
  font:
    500 20px/1.3 "DM Sans",
    sans-serif;
`;

const Mask = styled.span`
  display: inline-block;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: ${theme.colors.primaryFont};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.primaryFont};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(1px);
      color: black;
      & + ${Mask} {
        transform: skewX(12deg) translateX(-1px);
      }
    }
  }
`;
