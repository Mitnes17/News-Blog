import styled from 'styled-components';

export const Pagination = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;

  li {
    color: white;
    background-color: #805a3b;
    list-style-type: none;
    border-radius: 10px;
    padding: 7px;
    font-weight: bold;
    cursor: pointer;

    &.isActive {
      color: #805a3b;
      background-color: white;
      border: 2px solid #805a3b;
    }
  }
`;
