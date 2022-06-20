import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../api/data';

export interface DataState {
  data: Item[];
  selected: Item | undefined;

}

const initialState: DataState = {
  data: [],
  selected: undefined,
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fillData: (state: DataState, action: PayloadAction<Item[]>) => {
      state.data = action.payload;
    },
    setSelected: (state: DataState, action: PayloadAction<Item>) => {
      state.selected = action.payload;
    },
    resetSelected: (state: DataState) => {
      state.selected = undefined;
    },
    deleteItem: (state: DataState, action: PayloadAction<{ id: number }>) => {
      const removeById = (arr: Item[], id: number): Item[]=>{
        return arr.filter( a => a.id !== id).map( e => {
          return { ...e, children: removeById(e.children || [], id)}
        });
      }
      state.data = removeById(state.data, action.payload.id);
      state.selected = undefined;
    },
  },
});

export const { actions, reducer } = data;
