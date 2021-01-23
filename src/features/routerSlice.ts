import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface RouterState {
  value: number;
}

const initialState: RouterState = {
  value: 0,
};

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { setValue } = routerSlice.actions;

export const getValue = (state: RootState) => state.router.value;

export default routerSlice.reducer;
