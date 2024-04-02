// src/components/PrivateRoute.js or src/routes/PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);

export default PrivateRoute;
