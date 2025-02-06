import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  $marginBottom?: string;
}
const Title = styled.h2<IProps>`
  text-align: center;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
`;

export default Title;
