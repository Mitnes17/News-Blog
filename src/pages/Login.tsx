import { SyntheticEvent, useContext } from 'react';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { AuthContext } from '../context';

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <form onSubmit={login}>
      <Input placeholder='Login' />
      <Input
        placeholder='Password'
        type='password'
      />
      <Button color='teal'>Submit</Button>
    </form>
  );
};
