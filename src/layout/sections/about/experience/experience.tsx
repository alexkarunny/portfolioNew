import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "components/common/flex-wrapper";
import { ExperienceDetail } from "layout/sections/about/experience/experience-detail/experience-detail";

type Props = {
  title: string;
  workSchedule: string;
  workTitle: string;
  location: string;
  dates: string;
};

export const Experience: React.FC<Props> = ({ location, dates, workTitle, title, workSchedule }) => {
  return (
    <StyledExperience>
      <FlexWrapper justify={"space-between"}>
        <Title>{title}</Title>
        <WorkSchedule>{workSchedule}</WorkSchedule>
      </FlexWrapper>
      <FlexWrapper justify={"space-between"}>
        <ExperienceDetail iconId={"building"} detail={workTitle} />
        <ExperienceDetail iconId={"location"} detail={location} />
        <ExperienceDetail iconId={"dates"} detail={dates} />
      </FlexWrapper>
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
  max-width: 500px;
  width: 100%;
`;
const Title = styled.span``;
const WorkSchedule = styled.span``;
