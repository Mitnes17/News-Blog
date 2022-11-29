import { useContext } from 'react';

import { AuthContext } from '../../context';
import { AUTH } from '../../pages/Login/Login';
import { Button } from '../UI/Button';

import * as S from './styled';

export const NavBar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem(AUTH);
  };

  return (
    <S.NavBar>
      <S.Logo to='/posts'>
        <img
          src={require('../../svg/cat.svg').default}
          alt='cat'
        />
      </S.Logo>
      <S.Wrap>
        <S.Menu>
          <S.MenuLink to='/about'>About</S.MenuLink>
          <S.MenuLink to='/posts'>Posts</S.MenuLink>
        </S.Menu>
        <Button
          color='#dd4f5b'
          onClick={logout}
        >
          Logout
        </Button>
      </S.Wrap>
    </S.NavBar>
  );
};
