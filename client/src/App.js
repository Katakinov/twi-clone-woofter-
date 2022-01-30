import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutesCustom } from './Routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import './App.css';

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutesCustom(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <div className='app'>
          { routes }
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
