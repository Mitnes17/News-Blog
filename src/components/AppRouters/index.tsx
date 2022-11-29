import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../context';
import { publicRoutes, privateRoutes } from '../../routes';
import { Loader } from '../UI/Loader';

export const AppRoutes = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
    </Routes>
  );
};
