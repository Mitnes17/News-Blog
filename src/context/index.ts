import { createContext } from 'react';

export type AuthContextType = {
  isAuth: boolean;
  isLoading: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

const defaultState = {
  isAuth: false,
  isLoading: true,
  setIsAuth: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultState);
