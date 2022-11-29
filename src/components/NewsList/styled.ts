import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

export const NewsList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  row-gap: 30px;
  border-radius: 7px;
  background-color: #fffacd;
`;

export const H1 = styled.h1`
  font-size: 40px;
`;

export const NewsWrap = styled(TransitionGroup)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
`;
