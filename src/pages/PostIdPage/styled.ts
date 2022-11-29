import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 85%;
  padding: 40px 36px 36px 36px;
  row-gap: 60px;
  background-color: #fffacd;
  border-radius: 7px;
`;

export const Comments = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  list-style-type: none;

  h2 {
    font-size: 25px;
  }
`;

export const Comment = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: 40px;

  h1,
  p {
    &::first-letter {
      text-transform: uppercase;
    }
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 25px;
  }

  &::after {
    content: '';
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #c3b091;
  }
`;
