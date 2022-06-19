import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../api/data';

export interface DataState {
  data: Item[];
  level: number;
  isLoading: boolean;
}

const initialState: DataState = {
  data: [],
  level: 0,
  isLoading: false,
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fillData: (state: DataState, action: PayloadAction<Item[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    increaseLevel: (state: DataState) => {
      state.level = state.level + 1;
    },
    resetLevel: (state: DataState) => {
      state.level = 0;
    },

  },
});

export const { actions, reducer } = data;
