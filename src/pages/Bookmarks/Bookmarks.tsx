import { NewsList } from '../../components/NewsList';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Bookmarks = () => {
  const posts = useTypedSelector((state) => state.posts.posts);

  return (
    <div>
      <NewsList
        title='Bookmarks'
        posts={posts}
        deletePost={() => {}}
      />
    </div>
  );
};
