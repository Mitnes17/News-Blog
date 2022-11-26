import { Login } from '../pages/Login';
import { PostIDPage } from '../pages/PostIDPage';
import { Posts } from '../pages/Posts';
import { About } from './../pages/About';

export const privateRoutes = [
  { path: '/about', element: About },
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: PostIDPage },
  { path: '*', element: Posts },
];

export const publicRoutes = [
  { path: '/login', element: Login },
  { path: '*', element: Login },
];
