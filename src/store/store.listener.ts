import { createListenerMiddleware } from '@reduxjs/toolkit';

import { AppTheme } from './theme/theme.constants';
import { themeSlice } from './theme/theme.slice';
import { createTokens } from './user/user.api';
import { userSlice } from './user/user.slice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: themeSlice.actions.changeTheme.match,
  effect: ({ payload }) => {
    document
      .querySelector(':root')
      ?.classList[payload === AppTheme.Light ? 'add' : 'remove']('light');
  }
});

listenerMiddleware.startListening({
  matcher: createTokens.fulfilled.match,
  effect: ({ payload }) => {
    localStorage.setItem('@pixema/access-token', payload.access);
    localStorage.setItem('@pixema/refresh-token', payload.refresh);
  }
});

listenerMiddleware.startListening({
  matcher: userSlice.actions.logout.match,
  effect: () => {
    localStorage.removeItem('@pixema/access-token');
    localStorage.removeItem('@pixema/refresh-token');
  }
});
