import { StyleProps } from './Button.d';

import styled from 'styled-components';

export const Button = styled.button<StyleProps>`
  padding: 15px 23px;
  color: white;
  background-color: ${({ color }) => color || 'white'};
  border: none;
  border-radius: 7px;
  font-weight: 550;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: black;
    transition: 0.3s ease-in-out;
  }
`;
