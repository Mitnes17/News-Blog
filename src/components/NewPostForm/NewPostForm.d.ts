import { SyntheticEvent } from 'react';

import { Post } from '../../App';

export type Props = {
  post: Post;
  setPost: (e: Post) => void;
  addNewPost: (e: SyntheticEvent) => void;
};
