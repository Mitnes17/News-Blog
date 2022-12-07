import { Bookmarks } from '../pages/Bookmarks/Bookmarks';
import { Login } from '../pages/Login/Login';
import { PostIDPage } from '../pages/PostIdPage/PostIDPage';
import { Posts } from '../pages/Posts';
import { About } from './../pages/About';

export const privateRoutes = [
  { path: '/about', element: About },
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: PostIDPage },
  { path: '/bookmarks', element: Bookmarks },
  { path: '*', element: Posts },
];

export const publicRoutes = [
  { path: '/login', element: Login },
  { path: '*', element: Login },
];
