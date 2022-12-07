import { Post } from '../../../pages/Posts';

export enum PostsActionType {
  ADD_POST = 'ADD_POST',
  REMOVE_POST = 'REMOVE_POST',
}

type StateType = {
  posts: Post[];
};

type AddPostAction = {
  type: PostsActionType.ADD_POST;
  payload: Post;
};

type RemovePostAction = {
  type: PostsActionType.REMOVE_POST;
  payload: string;
};

export type ActionType = AddPostAction | RemovePostAction;
