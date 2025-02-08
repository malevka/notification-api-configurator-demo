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
  color: var(--button-primary-color);
  height: auto;
  width: ${(props) => props.$width || "auto"};
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin: ${(props) => props.$margin || "0"};
  font-size: 1.25rem;

  &:hover {
    background-color: var(--button-primary-hover-bg);
  }

  &:active {
    background-color: var(--button-primary-active-bg);
  }
  &:disabled {
    background-color: var(--button-disabled-bg);
    color: var(--button-disabled-color);

    border: 1px solid var(--button-disabled-bg);
  }
`;

export default Button;
