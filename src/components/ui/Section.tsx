import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  $flex?: string;
}
const Section = styled.div<IProps>`
  flex: ${(props) => props.$flex || "1"};
  min-width: 21rem;
  padding: 2rem 0;
`;

export default Section;
