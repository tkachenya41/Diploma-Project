import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FavoritePage } from '~/pages/FavoritesPage/FavoritePage';
import { MainPage } from '~/pages/MainPage/MainPage';
import { SettingsPage } from '~/pages/SettingsPage/SettingsPage';
import { TrendsPage } from '~/pages/TrendsPage/TrendsPage';

export const routerSchema = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
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
