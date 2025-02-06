import styled from "styled-components";

interface FlexContainerProps {
  children: React.ReactNode;
  $justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  $alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $gap?: string;
  $direction?: "row" | "column" | "row-reverse" | "column-reverse";
  $wrap?: "wrap" | "nowrap" | "wrap-reverse";
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
  gap: ${({ $gap }) => $gap || "1rem"};
`;

export default FlexContainer;
