import { FC } from 'react';

import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Props } from './NewPostForm';
import * as S from './styled';

export const NewPostForm: FC<Props> = ({ post, setPost, addNewPost }) => {
  return (
    <S.Form>
      <Input
        value={post.title}
        type='text'
        placeholder='Post title'
        onChange={(e: any) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.body}
        type='text'
        placeholder='Post content'
        onChange={(e: any) => setPost({ ...post, body: e.target.value })}
      />
      <Button
        color='#6c74cc'
        children='Add new post'
        onClick={(e: any) => addNewPost(e)}
      />
    </S.Form>
  );
};
