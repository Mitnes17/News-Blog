import styled from 'styled-components';

export const Wrap = styled.figure`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled.svg`
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    scale: 1.15;
  }
`;
