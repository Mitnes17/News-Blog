import { useState } from 'react';

import './App.css';
import { NewPostForm } from './components/NewPostForm';
import { NewsList } from './components/NewsList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Title', content: 'News body' },
    { id: 2, title: 'Title', content: 'News body' },
    { id: 3, title: 'Title', content: 'News body' },
  ]);

  const [post, setPost] = useState({ title: '', content: '' });

  const addNewPost = (e: any) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', content: '' });
  };

  const deletePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <NewPostForm
        {...{ post }}
        {...{ setPost }}
        {...{ addNewPost }}
      />
      <NewsList
        {...{ posts }}
        {...{ deletePost }}
      />
    </div>
  );
}

export default App;
