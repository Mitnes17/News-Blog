import { useState, useMemo, useEffect } from 'react';

import { usePosts } from './hooks/usePosts';
import { NewPostForm } from './components/NewPostForm';
import { NewsFilter } from './components/NewsFilter';
import { NewsList } from './components/NewsList';
import { ModalCreate } from './components/ModalCreate';
import { Button } from './components/UI/Button';
import './styles/App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState<{ id: number; title: string; body: string }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data.slice(0, 17));
    };
    fetchPosts();
  }, []);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: any) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: posts[0].id - 1 }]);
    setPost({ title: '', body: '' });
    setIsActiveModal(false);
  };

  const deletePost = (post: any) => {
    setPosts(posts.filter((p: any) => p.id !== post.id));
  };

  const [filter, setFilter] = useState({ select: '', search: '' });

  const filteredPosts = usePosts(posts, filter.select, filter.search);

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
        posts={filteredPosts}
        {...{ deletePost }}
      />
    </div>
  );
}

export default App;
