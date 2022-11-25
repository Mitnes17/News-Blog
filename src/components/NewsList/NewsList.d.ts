import { Post } from './../../App';

export type Props = {
  posts: Array;
  deletePost: (e: Post) => void;
  isLoading: boolean;
  error: string;
};
