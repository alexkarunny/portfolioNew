import React from "react";
import { SectionTitle } from "components/common/section-title";
import styled from "styled-components";
import { Slider } from "components/slider/slider";
import { FlexWrapper } from "components/common/flex-wrapper";

export const Gallery = () => {
  return (
    <StyledGallery>
      <SectionTitle>Gallery</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Slider />
      </FlexWrapper>
    </StyledGallery>
  );
};

const StyledGallery = styled.section`
  background-color: #645f5f;
`;
