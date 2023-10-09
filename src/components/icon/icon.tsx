import React from "react";
import iconsSprite from "assets/images/icons-sprite.svg";
import { IconsTypes } from "assets/types/types";

type Props = {
  iconId: IconsTypes;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon: React.FC<Props> = ({ iconId, height, viewBox, width }) => {
  return (
    <svg
      width={width || "120"}
      height={height || "120"}
      viewBox={viewBox || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};
