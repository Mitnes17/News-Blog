import { SyntheticEvent, useContext } from 'react';

import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { AuthContext } from '../../context';

import * as S from './styled';

export const AUTH = 'auth';

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem(AUTH, 'true');
  };

  return (
    <S.Form onSubmit={login}>
      <Input placeholder='Login' />
      <Input
        placeholder='Password'
        type='password'
      />
      <Button color='#367588'>Submit</Button>
    </S.Form>
  );
};
