import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
