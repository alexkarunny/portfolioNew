import React from "react";
import styled from "styled-components";
import { SectionTitle } from "components/common/section-title";
import { Menu } from "components/menu/menu";
import { FlexWrapper } from "components/common/flex-wrapper";
import { Project } from "layout/sections/projects/project/project";
import social from "assets/images/proj1.jpg";
import todo from "assets/images/proj2.jpg";

const menuItems = ["all", "react", "spa"];

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>My Projects</SectionTitle>
      <Menu menuItems={menuItems} />
      <FlexWrapper justify={"center"}>
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
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #0b363a;
`;
