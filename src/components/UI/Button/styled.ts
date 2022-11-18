import { StyleProps } from './Button.d';
import styled from 'styled-components';

export const Button = styled.button<StyleProps>`
  align-self: flex-start;
  padding: 15px 23px;
  border: 1px solid #805a3b;
  border-radius: 15px;
  color: #fef2e4;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ color }) => (color ? color : 'white')};
`;
