import { FC } from 'react';
import { Button } from '../UI/Button';
import { Props } from './NewsItem';
import * as S from './styled';

export const NewsItem: FC<Props> = ({ news: { title, body, id }, news, index, onClick }) => {
  return (
    <S.Article>
      <S.NewsItem>
        <S.Title>
          {id + 1}. {title}
        </S.Title>
        <S.Content>{body}</S.Content>
      </S.NewsItem>
      <Button
        color='#f55865'
        onClick={() => onClick(news)}
        children='Delete'
      />
    </S.Article>
  );
};
