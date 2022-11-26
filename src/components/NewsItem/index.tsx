import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../UI/Button';
import { Props } from './NewsItem';

import * as S from './styled';

export const NewsItem: FC<Props> = ({ news: { title, body, id }, news, index, onClick }) => {
  const navigate = useNavigate();

  return (
    <S.Article>
      <S.NewsItem>
        <S.Title>
          {id}. {title}
        </S.Title>
        <S.Content>{body}</S.Content>
      </S.NewsItem>
      <S.Buttons>
        <Button
          color='teal'
          onClick={() => navigate(`/posts/${id}`)}
          children='Open'
        />
        <Button
          color='#f55865'
          onClick={() => onClick(news)}
          children='Delete'
        />
      </S.Buttons>
    </S.Article>
  );
};
