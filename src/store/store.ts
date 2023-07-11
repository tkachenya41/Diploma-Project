import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './store.listener';
import { themeReducer } from './theme/theme.slice';

export const store = configureStore({
  reducer: {
    changeTheme: themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});
