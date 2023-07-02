import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainOutlet/MainLayout';
import { FavoritePage } from '~/pages/FavoritesPage/FavoritePage';
import { Home } from '~/pages/Home/Home';
import { SettingsPage } from '~/pages/SettingsPage/SettingsPage';
import { TrendsPage } from '~/pages/TrendsPage/TrendsPage';

export const routerSchema = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/Trends',
        element: <TrendsPage />
      },
      {
        path: '/Favorites',
        element: <FavoritePage />
      },
      {
        path: '/Settings',
        element: <SettingsPage />
      },
      {
        path: '*',
        element: <div>not found</div>
      }
    ]
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
