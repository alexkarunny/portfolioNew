import styled from "styled-components";

type Props = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?: "start" | "space-around" | "space-between" | "center" | "space-evenly";
  align?:
    | "normal"
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe"
    | "unsafe";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
};

export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  height: 100%;
  gap: ${(props) => props.gap || "0"};
`;
