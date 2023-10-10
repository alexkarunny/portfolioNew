import React from "react";
import styled from "styled-components";

type Props = {
  menuItems: string[];
};

export const Menu: React.FC<Props> = ({ menuItems }) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={"##"}>{item}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
