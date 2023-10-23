import React from "react";
import photo from "assets/images/foto1.webp";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";
import { Container } from "components/common/container";
import { theme } from "assets/styles/theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <Greeting>
              Hi there,
              <br />
              My name is
            </Greeting>
            <Name>Alex Karunny</Name>
            <MainTitle>Front-end Developer</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 358px;
  height: 358px;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 444px;
    height: 444px;
    border: 1px solid #161616;
  }
`;

const Photo = styled.img`
  width: 358px;
  height: 358px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border: 9px solid rgba(19, 176, 245, 1);
  border-radius: 50%;
  object-fit: cover;
  background-position-y: -20px;
`;

const MainTitle = styled.h1`
  color: ${theme.colors.secondaryFont};
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -1px;
`;

const Name = styled.h2`
  color: rgba(19, 176, 245, 1);
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -1px;
`;

const Greeting = styled.span`
  color: ${theme.colors.secondaryFont};
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -1px;
`;
