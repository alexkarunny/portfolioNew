import React from "react";
import { Icon } from "components/icon/icon";
import styled from "styled-components";
import { IconsTypes } from "assets/types/types";

type Props = {
  iconId: IconsTypes;
};

export const Skill: React.FC<Props> = ({ iconId }) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 23%;
  background-color: #c9b7b7;
`;
