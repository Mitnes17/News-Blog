import { postsReducer } from './postsReducer/index';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ posts: postsReducer });

export type RootType = ReturnType<typeof rootReducer>;
