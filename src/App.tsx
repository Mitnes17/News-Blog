import { useState, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';

import { usePosts } from './hooks/usePosts';
import { NewPostForm } from './components/NewPostForm';
import { NewsFilter } from './components/NewsFilter';
import { NewsList } from './components/NewsList';
import { ModalCreate } from './components/ModalCreate';
import { Button } from './components/UI/Button';
import { SELECT } from './hooks/usePosts';
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
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data.slice(0, 17));
    };
    fetchPosts();
  }, []);

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
        posts={filteredPosts}
        {...{ deletePost }}
      />
    </div>
  );
}

export default App;
