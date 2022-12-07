import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { addPostAction, removePostAction } from '../../store/reducers/postsReducer';
import { Bookmark } from '../UI/Bookmark';

import { Button } from '../UI/Button';
import { Props } from './NewsItem';

import * as S from './styled';

export const NewsItem: FC<Props> = ({ news: { title, body, id }, news, onClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const posts = useTypedSelector((state) => state.posts.posts);
  const [marked, setMarked] = useState(false);
  const [isBookmarks, setIsBookmarks] = useState<boolean | null>(null);

  const addPost = () => {
    posts.find((post) => post.id === id)
      ? dispatch(removePostAction(+id))
      : dispatch(addPostAction(news));
  };

  const isBookmarksLocation = useCallback(
    () =>
      location.pathname === '/posts' || location.pathname === '/'
        ? setIsBookmarks(false)
        : setIsBookmarks(true),
    [location.pathname]
  );

  useEffect(() => {
    isBookmarksLocation();
  }, [isBookmarksLocation]);

  useEffect(() => {
    posts.find((post) => post.id === id) ? setMarked(true) : setMarked(false);
  }, [id, posts]);

  return (
    <S.Article>
      <S.NewsItem>
        <S.Title>{title}</S.Title>
        <S.Content>{body}</S.Content>
      </S.NewsItem>
      <S.BookmarkWrap>
        <Bookmark
          marked={marked}
          onClick={() => addPost()}
        />
      </S.BookmarkWrap>
      <S.Buttons>
        <Button
          color='#367588'
          onClick={() => navigate(`/posts/${id}`)}
          children='Open'
        />
        {!isBookmarks && (
          <Button
            color='#f55865'
            onClick={() => onClick(news)}
            children='Delete'
          />
        )}
      </S.Buttons>
    </S.Article>
  );
};
