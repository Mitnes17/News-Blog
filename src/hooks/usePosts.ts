import { useMemo } from 'react';

export const useSort = (posts: any, select: string) =>
  useMemo(
    () => (select ? [...posts].sort((a, b) => a[select].localeCompare(b[select])) : posts),
    [select, posts]
  );

export const usePosts = (posts: any, select: string, search: string) => {
  const sortedPosts = useSort(posts, select);

  return useMemo(
    () =>
      sortedPosts.filter(
        (post: any) =>
          post.title.toLowerCase().includes(search) || post.body.toLowerCase().includes(search)
      ),
    [search, sortedPosts]
  );
};
