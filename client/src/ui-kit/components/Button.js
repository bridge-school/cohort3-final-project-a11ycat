import styled from "styled-components";
import { variables } from "../variables";

export const Button = styled.button`
  border-radius: ${variables.button.borderRadius};
  height: ${variables.button.height};
  min-width: 100px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  appearance: none;
  background: ${variables.colour.darkGrey};
  color: ${variables.colour.white};
  border: 1px solid ${variables.colour.darkGrey};
  > * {
    vertical-align: middle;
  }
`;
