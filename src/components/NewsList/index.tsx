import { FC } from 'react';
import { NewsItem } from '../NewsItem';
import { NewsType } from '../NewsItem/NewsItem';
import { Props } from './NewsList';
import * as S from './styled';

export const NewsList: FC<Props> = ({ posts, deletePost }) => {
  return (
    <S.NewsList>
      <S.H1>Hot news</S.H1>

      {posts.map((post: NewsType, index: number) => (
        <NewsItem
          {...{ index }}
          news={post}
          onClick={deletePost}
        />
      ))}
    </S.NewsList>
  );
};
