import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './app/pages/login';
import Index from './app/pages';
import RouterPrivate from './app/routerPrivate';
import auth from './api/auth';
import Perfil from './app/pages/perfil';

function App(e: any) {
  function check() {
    const token: any = localStorage.getItem('token');
    if (token == null) return false;
    return true;
  }
  const res = check();

  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Login />} />
        <Route
          path='/index'
          element={
            <RouterPrivate.DashbordPrivate user={res}>
              <Index />
            </RouterPrivate.DashbordPrivate>
          } />

        <Route
          path='/perfil'
          element={
            <RouterPrivate.PerfilPrivate user={res}>
              <Perfil />
            </RouterPrivate.PerfilPrivate>
          } />

      </Routes>
    </div>
  );
}

export default App;