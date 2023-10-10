import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";
import { SectionTitle } from "components/common/section-title";
import { Skill } from "layout/sections/skills/skill/skill";

export const SkillsIcons = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper justify={"space-between"} wrap={"wrap"}>
        <Skill iconId={"html"} />
        <Skill iconId={"css"} />
        <Skill iconId={"js"} />
        <Skill iconId={"react"} />
        <Skill iconId={"redux"} />
        <Skill iconId={"sass"} />
        <Skill iconId={"git"} />
        <Skill iconId={"github"} />
        <Skill iconId={"figma"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #99e3e1;
`;
