import { FC } from 'react';
import { Button } from '../UI/Button';
import { Props } from './NewsItem';
import * as S from './styled';

export const NewsItem: FC<Props> = ({ news: { title, content }, news, index, onClick }) => {
  return (
    <S.Article>
      <S.NewsItem>
        <S.Title>
          {index + 1}. {title}
        </S.Title>
        <S.Content>{content}</S.Content>
      </S.NewsItem>
      <Button
        color='#fd4f5d'
        onClick={() => onClick(news)}
        children='Delete'
      />
    </S.Article>
  );
};
