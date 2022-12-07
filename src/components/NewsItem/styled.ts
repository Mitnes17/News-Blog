import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  position: relative;
  padding: 16px 30px;
  row-gap: 30px;
  column-gap: 20px;
  background-color: #fffdd0;
  border-radius: 7px;
  box-shadow: 1px 1px 7px 3px rgba(191, 186, 130, 1);
  z-index: 1;
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 25px;
`;

export const Title = styled.h2`
  margin-right: 50px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Content = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  padding: 6px 10px;
  background-color: #c60000;
  border: 1px solid #805a3b;
  outline: none;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  color: #fffdd0;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 20px;
`;

export const BookmarkWrap = styled.figure`
  position: absolute;
  top: 7px;
  right: 16px;
`;
