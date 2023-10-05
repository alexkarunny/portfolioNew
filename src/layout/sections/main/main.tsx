import React from "react";
import photo from "assets/images/foto1.webp";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi</span>
          <Name>My name is Alex Karunny</Name>
          <MainTitle>Front-end developer</MainTitle>
        </div>
        <Photo src={photo} />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #f1c6c6;
`;

const Photo = styled.img`
  width: 350px;
  height: 350px;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;
