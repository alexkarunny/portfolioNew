import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at atque consequuntur ex, laborum
            libero minima nemo nesciunt non nostrum nulla quasi ratione, recusandae repellat sint suscipit vitae
            voluptate.
          </Text>
          <Name>Ivan Ivanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  width: 500px;
`;
const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p``;
const Name = styled.span``;
const Pagination = styled.div`
  text-align: center;
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #253442;
  }
`;
