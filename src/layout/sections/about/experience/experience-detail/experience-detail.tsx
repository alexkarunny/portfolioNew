import React from "react";
import styled from "styled-components";
import { Icon } from "components/icon/icon";
import { IconsTypes } from "assets/types/types";

type Props = {
  iconId: IconsTypes;
  detail: string;
};

export const ExperienceDetail: React.FC<Props> = ({ detail, iconId }) => {
  return (
    <StyledExperienceDetail>
      <Icon iconId={iconId} width={"12px"} height={"12px"} viewBox={"0 0 16 12"} />
      <Detail>{detail}</Detail>
    </StyledExperienceDetail>
  );
};

const StyledExperienceDetail = styled.div`
  display: inline-block;
`;
const Detail = styled.span``;
