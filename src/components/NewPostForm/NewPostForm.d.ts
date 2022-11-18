export type PostType = {
  id?: number;
  userId?: number;
  title: string;
  body: string;
};

export type Props = {
  post: PostType;
  setPost: any;
  addNewPost: any;
};
