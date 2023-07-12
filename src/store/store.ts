import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './store.listener';
import { themeReducer } from './theme/theme.slice';
import { userReducer } from './user/user.slice';

export const store = configureStore({
  reducer: {
    changeTheme: themeReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});
