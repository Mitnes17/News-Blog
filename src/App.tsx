import { useState, useMemo } from 'react';

import './App.css';
import { NewPostForm } from './components/NewPostForm';
import { NewsList } from './components/NewsList';
import { Input } from './components/UI/Input';
import { Select } from './components/UI/Select';

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
  };

  const deletePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [selectSort, setSelectSort] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('work');
    return selectSort
      ? [...posts].sort((a, b) =>
          a[selectSort as keyof posts].localeCompare(b[selectSort as keyof posts])
        )
      : posts;
  }, [posts, selectSort]);

  const onChangeSort = (sort: string) => {
    setSelectSort(sort);
  };

  const [search, setSearch] = useState('');

  const sortedAndFilteredPosts = useMemo(
    () =>
      sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search) || post.content.toLowerCase().includes(search)
      ),
    [search, sortedPosts]
  );

  return (
    <div className='App'>
      <NewPostForm
        {...{ post }}
        {...{ setPost }}
        {...{ addNewPost }}
      />
      <hr style={{ borderTop: '1px solid #805a3b' }} />
      <div className='wrap'>
        <Select
          onChange={onChangeSort}
          defaultValue='Sort By'
          options={[
            { value: 'title', name: 'Title' },
            { value: 'content', name: 'Content' },
          ]}
        />
        <Input
          type='text'
          placeholder='Search...'
          onChange={(e: any) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <NewsList
        {...{ posts }}
        posts={sortedAndFilteredPosts}
        {...{ deletePost }}
      />
    </div>
  );
}

export default App;
