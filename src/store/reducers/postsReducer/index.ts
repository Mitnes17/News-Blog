import { NewsType } from '../../../components/NewsItem/NewsItem';
import { Post } from '../../../pages/Posts';
import { ActionType, PostsActionType, StateType } from './postsReducer.d';

const initialValue: StateType = {
  posts: [],
};

export const postsReducer = (state = initialValue, action: ActionType): StateType => {
  switch (action.type) {
    case PostsActionType.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case PostsActionType.REMOVE_POST:
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
    default:
      return state;
  }
};

export const removePostAction = (id: number) => ({
  type: PostsActionType.REMOVE_POST,
  payload: id,
});

export const addPostAction = (post: Post) => ({
  type: PostsActionType.ADD_POST,
  payload: post,
});
