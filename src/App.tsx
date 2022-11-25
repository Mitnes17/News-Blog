import { useState, useEffect, SyntheticEvent, useMemo } from 'react';

import { usePosts } from './hooks/usePosts';
import { NewPostForm } from './components/NewPostForm';
import { NewsFilter } from './components/NewsFilter';
import { NewsList } from './components/NewsList';
import { ModalCreate } from './components/ModalCreate';
import { Button } from './components/UI/Button';
import { SELECT } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostService';
import { getPageCount } from './utils/pages';
import { Pagination } from './components/UI/Pagination';

import './styles/App.css';

export type Post = {
  id: number;
  title: string;
  body: string;
};

const emptyPost = { title: '', body: '', id: 0 };

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState(emptyPost);
  const [filter, setFilter] = useState({ select: SELECT.title, search: '' });
  const filteredPosts = usePosts(posts, filter.select, filter.search);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService(currentPage, limit);
    const totalCount = response.headers['x-total-count']!;
    setTotalPageCount(getPageCount(+totalCount, limit));
    setPosts(response.data);
  });

  const pages = useMemo(
    () => Array.from(new Array(totalPageCount).fill(0), (_, i) => i + 1),
    [totalPageCount]
  );

  const addNewPost = (e: SyntheticEvent) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...post, id: Date.now() }]);
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
      <Pagination
        list={pages}
        current={currentPage}
        onClick={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
