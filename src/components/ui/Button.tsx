import { styled } from "styled-components";

interface IProps {
  children: React.ReactNode;
  $width?: string;
  $margin?: string;
}

const Button = styled.button<IProps>`
  appearance: none;
  border: 1px solid var(--button-primary-bg);
  background-color: var(--button-primary-bg);
  height: 2rem;
  width: ${(props) => props.$width || "auto"};
  border-radius: 4px;
  padding: 0 1rem;
  margin: ${(props) => props.$margin || "0"};
`;

export default Button;
