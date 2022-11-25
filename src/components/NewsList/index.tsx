import { FC } from 'react';

import { NewsItem } from '../NewsItem';
import { NewsType } from '../NewsItem/NewsItem';
import { Props } from './NewsList';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Loader } from '../UI/Loader';

import * as S from './styled';

export const NewsList: FC<Props> = ({ posts, deletePost, isLoading, error }) => {
  return (
    <S.NewsList>
      <S.H1>Hot news</S.H1>
      {error ? (
        <h1>Download error, please, try again</h1>
      ) : isLoading ? (
        <Loader />
      ) : posts.length === 0 ? (
        <h2>There is no news!</h2>
      ) : (
        <TransitionGroup className='postsList'>
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
        </TransitionGroup>
      )}
    </S.NewsList>
  );
};
