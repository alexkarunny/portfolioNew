import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";
import { Experience } from "layout/sections/about/experience/experience";
import { Container } from "components/common/container";
import { theme } from "assets/styles/theme";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SubTitle>About Me</SubTitle>
        <Text>
          I'm frontend developer with experience in creating SPA with React/Redux/TypeScript. I improving my skills in
          this direction and plan to expand them with new technologies, such as Vue. I usually spend my free time
          reading IT-literature (M.Fauler), Codewars and improving my English. Open to your suggestions.
        </Text>
        <SubTitle>Experience</SubTitle>
        <FlexWrapper direction={"column"}>
          <Experience
            title={"Front"}
            dates={"2023"}
            location={"Minsk"}
            workTitle={"IT-Incubator"}
            workSchedule={"PartTime"}
          />
          <Experience
            title={"Front"}
            dates={"2023"}
            location={"Minsk"}
            workTitle={"IT-Incubator"}
            workSchedule={"PartTime"}
          />
          <Experience
            title={"Front"}
            dates={"2023"}
            location={"Minsk"}
            workTitle={"IT-Incubator"}
            workSchedule={"PartTime"}
          />
        </FlexWrapper>
        <SubTitle>Education</SubTitle>
        <Experience
          title={"Engineer"}
          dates={"2009"}
          location={"Minsk"}
          workTitle={"BSUIR"}
          workSchedule={"FullTime"}
        />
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section``;
const Text = styled.p`
  max-width: 700px;
  width: 100%;
  font-size: 18px;
  line-height: 1.4;
`;
const SubTitle = styled.h3`
  color: ${theme.colors.secondaryFont};
  text-align: left;
  font-weight: bold;
  font-size: 42px;
  letter-spacing: -0.4px;
  margin: 40px 0;
`;
