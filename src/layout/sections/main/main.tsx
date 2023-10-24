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
            <div className={"frame first"}></div>
            <div className={"frame second"}></div>
            <div className={"frame third"}></div>
            <div className={"frame forth"}></div>
            <div className={"frame fifth"}></div>
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
  max-width: 367px;
  width: 100%;
  height: 367px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-image: linear-gradient(${theme.colors.secondaryAccent}, ${theme.colors.primaryAccent});
  display: flex;
  justify-content: center;
  align-items: center;

  & .frame {
    content: "";
    position: absolute;
    display: inline-block;
    width: 444px;
    height: 444px;
    border: 1px solid;
    border-image: linear-gradient(rgba(22, 22, 22, 1), rgba(255, 255, 255, 0)) 1;
    opacity: 0.1;
  }
  & .first {
    transform: rotate(30deg);
  }
  & .second {
    transform: rotate(45deg);
  }
  & .third {
    transform: rotate(60deg);
  }
  & .forth {
    transform: rotate(75deg);
  }
  & .fifth {
    transform: rotate(90deg);
  }
`;

const Photo = styled.img`
  width: 349px;
  height: 349px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  color: ${theme.colors.secondaryFont};
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -1px;
`;

const Name = styled.h2`
  color: transparent;
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -1px;
  background-image: linear-gradient(to right, ${theme.colors.primaryAccent}, ${theme.colors.secondaryAccent});
  -webkit-background-clip: text;
`;

const Greeting = styled.span`
  color: ${theme.colors.secondaryFont};
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -1px;
`;
