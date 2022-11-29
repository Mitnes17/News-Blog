import { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { NewsItem } from '../NewsItem';
import { NewsType } from '../NewsItem/NewsItem';
import { Props } from './NewsList';
import { Loader } from '../UI/Loader';

import * as S from './styled';

export const NewsList: FC<Props> = ({ posts, deletePost, isLoading, error }) => {
  return (
    <S.NewsList>
      <S.H1>Hot news</S.H1>

      {error ? (
        <h1>Download error, please, try again</h1>
      ) : posts.length === 0 ? (
        <h2>There is no news!</h2>
      ) : (
        <S.NewsWrap className='postsList'>
          {posts.map((post: NewsType, index: number) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames='post'
            >
              <NewsItem
                {...{ index }}
                news={post}
                onClick={deletePost}
              />
            </CSSTransition>
          ))}
        </S.NewsWrap>
      )}
      {isLoading && <Loader />}
    </S.NewsList>
  );
};
