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

import '../styles/App.css';
import { useObserver } from '../hooks/useObserver';

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
  const filteredPosts = usePosts(posts, filter.select, filter.search);
  const lastElement = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const getPosts = useCallback(async () => {
    const response = await PostService.getAll(currentPage, limit);
    const totalCount = response.headers['x-total-count']!;
    setTotalPageCount(getPageCount(+totalCount, limit));
    setPosts([...posts, ...response.data]);
  }, [currentPage, limit]);

  const [fetchPosts, isLoading, error] = useFetching(getPosts);

  useObserver(lastElement, () => setCurrentPage((prev) => prev + 1), isLoading, currentPage < 10);

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
  }, [currentPage]);

  return (
    <div className='App'>
      <Button
        color='#6c74cc'
        children='Create new post'
        onClick={() => setIsActiveModal(true)}
      />
      <ModalCreate
        isActive={isActiveModal}
        setIsActive={setIsActiveModal}
      >
        <NewPostForm
          {...{ post }}
          {...{ setPost }}
          {...{ addNewPost }}
        />
      </ModalCreate>
      <NewsFilter
        {...{ filter }}
        {...{ setFilter }}
      />
      <NewsList
        error={error}
        isLoading={isLoading}
        posts={filteredPosts}
        {...{ deletePost }}
      />
      <div ref={lastElement}></div>
    </div>
  );
};
