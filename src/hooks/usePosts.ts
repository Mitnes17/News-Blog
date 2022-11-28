import { useMemo } from 'react';
import { Post } from '../pages/Posts';

export enum SELECT {
  title = 'title',
  body = 'body',
  id = 'id',
}

export const useSort = (posts: Post[], select: SELECT) =>
  useMemo(
    () =>
      select === SELECT.title || select === SELECT.body
        ? [...posts].sort((a, b) => a[select].localeCompare(b[select]))
        : [...posts].sort((a, b) => +a.id - +b.id),
    [select, posts]
  );

export const usePosts = (posts: Post[], select: SELECT, search: string) => {
  const sortedPosts = useSort(posts, select);

  return useMemo(
    () =>
      sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search) || post.body.toLowerCase().includes(search)
      ),
    [search, sortedPosts]
  );
};
