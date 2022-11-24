import styled from 'styled-components';

export const Loader = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
  display: flex;
  align-self: center;
  justify-content: center;

  &:after,
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: spin 1s linear infinite;
    transform-origin: 0px 100%;
  }

  &:before {
    transform-origin: 0 50%;
    background: teal;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
