import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppTheme } from './theme.constants';
import { type AppThemes, type ThemeState } from './theme.types';

export const initialState: ThemeState = {
  appearance: AppTheme.Dark
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<AppThemes>) => {
      state.appearance = action.payload;
    }
  }
});

export const themeReducer = themeSlice.reducer;
export const { actions: themeActions } = themeSlice;
