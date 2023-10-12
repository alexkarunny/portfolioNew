import React from "react";
import styled from "styled-components";
import { SectionTitle } from "components/common/section-title";
import { FlexWrapper } from "components/common/flex-wrapper";
import { Experience } from "layout/sections/about/experience/experience";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle>About Me</SectionTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at dolor dolorem facilis fugit, laudantium
        molestias qui quos ratione voluptas! Accusantium, earum facere id magnam mollitia obcaecati quidem sequi
        voluptatum!
      </Text>
      <SectionTitle>Experience</SectionTitle>
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
      <SectionTitle>Education</SectionTitle>
      <Experience title={"Engineer"} dates={"2009"} location={"Minsk"} workTitle={"BSUIR"} workSchedule={"FullTime"} />
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  min-height: 100vh;
`;
const Text = styled.p``;
