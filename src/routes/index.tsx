import React from 'react';

// router
import { Route, Routes } from 'react-router-dom';

// components
import Login from '../auth/login/Login';
import News from '../pages/news/News';
import PrivateRoute from '../auth/PrivateRoute';
import NotFound from '../pages/error/NotFound';
import Profile from '../pages/profile/Profile';
import App from '../App';

export default function RouteX() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route
        path='/'
        element={
          <PrivateRoute>
            <App />
          </PrivateRoute>
        }
      >
        <Route
          path='news'
          element={
            <PrivateRoute>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          path='profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
