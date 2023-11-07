import React from "react";
import styled from "styled-components";
import { SectionTitle } from "components/common/section-title";
import { TabMenu } from "layout/sections/projects/tab-menu/tab-menu";
import { FlexWrapper } from "components/common/flex-wrapper";
import { Project } from "layout/sections/projects/project/project";
import social from "assets/images/proj1.jpg";
import todo from "assets/images/proj2.jpg";
import { Container } from "components/common/container";
import { theme } from "assets/styles/theme";

const menuItems = ["all", "react", "spa"];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <TabMenu menuItems={menuItems} />
        <FlexWrapper justify={"space-between"}>
          <Project
            title={"Social"}
            src={social}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cum dicta dolorem fugit quam quasi quisquam velit veniam."
            }
            techStack={["React", "Typescript"]}
          />
          <Project
            title={"ToDo"}
            src={todo}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum eum obcaecati provident rerum. Ducimus."
            }
            techStack={["HTML", "SCC"]}
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: ${theme.colors.primaryBg};
`;
