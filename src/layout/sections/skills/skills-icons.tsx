import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";
import { SectionTitle } from "components/common/section-title";
import { Skill } from "layout/sections/skills/skill/skill";
import { Container } from "components/common/container";
import { theme } from "assets/styles/theme";

export const SkillsIcons = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>
        <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"80px"}>
          <Skill iconId={"html"} />
          <Skill iconId={"css"} />
          <Skill iconId={"js"} />
          <Skill iconId={"typescript"} />
          <Skill iconId={"react"} />
          <Skill iconId={"redux"} />
          <Skill iconId={"sass"} />
          <Skill iconId={"git"} />
          <Skill iconId={"github"} />
          <Skill iconId={"figma"} />
          <Skill iconId={"webstorm"} />
          <Skill iconId={"postman"} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: ${theme.colors.primaryBg};
`;
