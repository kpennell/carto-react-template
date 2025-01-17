import React from 'react';
import { Navigate } from 'react-router-dom';

import { OAuthCallback } from '@carto/react-auth';

import Main from 'components/views/Main';
import Stores from 'components/views/stores/Stores';
import StoresList from 'components/views/stores/StoresList';
import StoresDetail from 'components/views/stores/StoresDetail';
import Kpi from 'components/views/Kpi';
import Tileset from 'components/views/Tileset';
import NotFound from 'components/views/NotFound';
// [hygen] Import views

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Navigate to='/stores' /> },
      {
        path: '/stores',
        element: <Stores />,
        children: [
          { path: '/', element: <StoresList /> },
          { path: '/:id', element: <StoresDetail /> },
        ],
      },
      { path: '/kpi', element: <Kpi /> },
      { path: '/tileset', element: <Tileset /> },
      // [hygen] Add routes
    ],
  },
  { path: '/oauthCallback', element: <OAuthCallback /> },
  { path: '404', element: <NotFound /> },
  { path: '*', element: <Navigate to='/404' /> },
];

export default routes;
