import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Report = React.lazy(() => import('./views/Dashboard/Report'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'User', component: Users },
  { path: '/report', exact: true,  name: 'Report', component: Report },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
