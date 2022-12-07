import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { AppRoutes } from './components/AppRouters';
import { NavBar } from './components/NavBar';
import { AuthContext } from './context';
import { AUTH } from './pages/Login/Login';
import { store } from './store';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(AUTH)) setIsAuth(true);
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <Provider store={store}>
        <NavBar />
        <AppRoutes />
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
