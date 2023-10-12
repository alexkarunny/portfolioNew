import React from "react";
import styled from "styled-components";
import { SectionTitle } from "components/common/section-title";
import { Button } from "components/common/button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>Let's work together</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #e7dfdf;
`;
