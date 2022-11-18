import { useState, useMemo } from 'react';

import './App.css';
import { NewPostForm } from './components/NewPostForm';
import { NewsFilter } from './components/NewsFilter';
import { NewsList } from './components/NewsList';
import { ModalCreate } from './components/ModalCreate';
import { Button } from './components/UI/Button';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: '1Title', content: '2News body' },
    { id: 2, title: '2Title', content: '3News body' },
    { id: 3, title: '3Title', content: '1News body' },
  ]);

  interface posts {
    title: string;
    content: string;
  }

  const [post, setPost] = useState({ title: '', content: '' });

  const addNewPost = (e: any) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', content: '' });
    setIsActiveModal(false);
  };

  const deletePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [filter, setFilter] = useState({ select: '', search: '' });

  const sortedPosts = useMemo(
    () =>
      filter.select
        ? [...posts].sort((a, b) =>
            a[filter.select as keyof posts].localeCompare(b[filter.select as keyof posts])
          )
        : posts,
    [filter.select, posts]
  );

  const sortedAndFilteredPosts = useMemo(
    () =>
      sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(filter.search) ||
          post.content.toLowerCase().includes(filter.search)
      ),
    [filter.search, sortedPosts]
  );

  const [isActiveModal, setIsActiveModal] = useState(false);

  const onClickIsActiveModal = () => setIsActiveModal(true);

  return (
    <div className='App'>
      <Button
        color='#6c74cc'
        children='Create new post'
        onClick={onClickIsActiveModal}
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
        posts={sortedAndFilteredPosts}
        {...{ deletePost }}
      />
    </div>
  );
}

export default App;
