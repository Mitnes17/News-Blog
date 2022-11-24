import { useMemo } from 'react';
import { Post } from '../App';

export enum SELECT {
  title = 'title',
  body = 'body',
}

export const useSort = (posts: Post[], select: SELECT) =>
  useMemo(() => [...posts].sort((a, b) => a[select].localeCompare(b[select])), [select, posts]);

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
