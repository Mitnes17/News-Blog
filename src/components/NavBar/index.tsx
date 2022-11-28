import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import { Button } from '../UI/Button';

export const NavBar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth'); // key auth in const
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
