import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import routerReducer from '../features/routerSlice';

export const store = configureStore({
  reducer: {
    router: routerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

