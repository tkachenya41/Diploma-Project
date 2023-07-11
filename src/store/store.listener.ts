import { createListenerMiddleware } from '@reduxjs/toolkit';

import { AppTheme } from './theme/theme.constants';
import { themeSlice } from './theme/theme.slice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: themeSlice.actions.changeTheme.match,
  effect: ({ payload }) => {
    document
      .querySelector(':root')
      ?.classList[payload === AppTheme.Light ? 'add' : 'remove']('light');
  }
});
