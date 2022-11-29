import { ChangeEvent, FC } from 'react';

import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Props } from './NewPostForm';

import * as S from './styled';

export const NewPostForm: FC<Props> = ({ post, setPost, addNewPost }) => {
  return (
    <S.Form>
      <Input
        value={post.title}
        placeholder='Post title'
        onChange={(e: ChangeEvent) =>
          setPost({ ...post, title: (e.target as HTMLInputElement).value })
        }
      />
      <Input
        value={post.body}
        placeholder='Post content'
        onChange={(e: ChangeEvent) =>
          setPost({ ...post, body: (e.target as HTMLInputElement).value })
        }
      />
      <Button
        color='#367588'
        children='Add new post'
        onClick={addNewPost}
      />
    </S.Form>
  );
};
