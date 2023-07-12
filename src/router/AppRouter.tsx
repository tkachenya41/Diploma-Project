import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainOutlet/MainLayout';
import { CardPage } from '~/pages/CardPage/CardPage';
import { EmailConfirmationPage } from '~/pages/EmailConfirmation/EmailConfirmationPage';
import { FavoritePage } from '~/pages/FavoritesPage/FavoritePage';
import { Home } from '~/pages/Home/Home';
import { SearchOutputPage } from '~/pages/SearchOutputPage/SearchOutputPage';
import { SettingsPage } from '~/pages/SettingsPage/SettingsPage';
import { SignInPage } from '~/pages/SignInPage/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage/SignUpPage';
import { TrendsPage } from '~/pages/TrendsPage/TrendsPage';
import { type RootState, useAppDispatch } from '~/store/store.types';
import { fetchUser } from '~/store/user/user.api';

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
        path: '/card/:id',
        element: <CardPage />
      },
      {
        path: '/search/:request',
        element: <SearchOutputPage />
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
        path: '/activate/:uid/:token',
        element: <EmailConfirmationPage />
      },

      {
        path: '*',
        element: <div>not found</div>
      }
    ]
  },
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> }
]);

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const tokens = useSelector((state: RootState) =>
    state.user.tokens.status === 'success' ? state.user.tokens.data : null
  );

  useEffect(() => {
    if (tokens) {
      const promise = dispatch(fetchUser());

      return () => {
        promise.abort('cancelled');
      };
    }
  }, [dispatch, tokens]);
  return <RouterProvider router={routerSchema} />;
};
