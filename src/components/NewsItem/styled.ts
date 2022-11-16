import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #fef2e4;
  border: 1px solid #805a3b;
  border-radius: 15px;
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.h2``;

export const Content = styled.p``;

export const Button = styled.button`
  background-color: #c60000;
  border: 1px solid #805a3b;
  outline: none;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 15px;
  cursor: pointer;
  color: #fef2e4;
`;
