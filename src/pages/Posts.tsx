import { useState, useEffect, SyntheticEvent, useMemo, useCallback, useRef } from 'react';

import PostService from '../API/PostService';
import { ModalCreate } from '../components/ModalCreate';
import { NewPostForm } from '../components/NewPostForm';
import { NewsFilter } from '../components/NewsFilter';
import { NewsList } from '../components/NewsList';
import { Button } from '../components/UI/Button';
import { useFetching } from '../hooks/useFetching';
import { SELECT, usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';
import { useObserver } from '../hooks/useObserver';

import '../styles/App.css';

export type Post = {
  id: string;
  title: string;
  body: string;
};

const emptyPost = { title: '', body: '', id: 0 };

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState(emptyPost);
  const [filter, setFilter] = useState({ select: SELECT.id, search: '' });
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const filteredPosts = usePosts(posts, filter.select, filter.search);

  const getPosts = useCallback(async () => {
    const response = await PostService.getAll(currentPage, limit);
    const totalCount = response.headers['x-total-count']!;
    setTotalPageCount(getPageCount(+totalCount, limit));
    setPosts((prev) => [...prev, ...response.data]);
  }, [currentPage, limit]);

  const [fetchPosts, isLoading, error] = useFetching(getPosts);

  useObserver(
    lastElement,
    () => setCurrentPage((prev) => prev + 1),
    isLoading,
    currentPage < totalPageCount
  );

  const pages = useMemo(
    () => Array.from(new Array(totalPageCount).fill(0), (_, i) => i + 1),
    [totalPageCount]
  );

  const addNewPost = (e: SyntheticEvent) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...post, id: Date.now().toString() }]);
    setPost(emptyPost);
    setIsActiveModal(false);
  };

  const deletePost = (post: Post) => {
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage, limit]);

  return (
    <div className='App'>
      <Button
        color='#367588'
        children='Create new post'
        onClick={() => setIsActiveModal(true)}
      />
      <ModalCreate
        isActive={isActiveModal}
        setIsActive={setIsActiveModal}
      >
        <NewPostForm
          post={post}
          setPost={setPost}
          addNewPost={addNewPost}
        />
      </ModalCreate>
      <NewsFilter
        filter={filter}
        setFilter={setFilter}
        setLimit={setLimit}
      />
      <NewsList
        title='Hot news'
        error={error}
        isLoading={isLoading}
        posts={filteredPosts}
        deletePost={deletePost}
      />
      <div ref={lastElement}></div>
    </div>
  );
};
