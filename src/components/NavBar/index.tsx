import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import { Button } from '../UI/Button';

export const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth && setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div>
      <Button
        color='coral'
        onClick={logout}
      >
        Logout
      </Button>
      <Link to='/about'>About</Link>
      <Link to='/posts'>Posts</Link>
    </div>
  );
};
