import { StyleProps } from './ModalCreate';
import styled from 'styled-components';

export const CreateForm = styled.div`
  min-width: 300px;
  width: 50%;
  padding: 40px 40px 20px 40px;
  transform: scale(0);
  border: 2px solid #805a3b;
  border-radius: 15px;
  background-color: #fef2e4;
  transition: 0.3s;
`;

export const ModalCreate = styled.div<StyleProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);

  ${({ isActive }) =>
    isActive &&
    `
            opacity: 1;
            transition: 0.3s;
            justify-content: center;
            align-items: center;
            pointer-events: visible;

            ${CreateForm} {
              transform: scale(1);
              transition: 0.3s;
            }
          `}
`;
