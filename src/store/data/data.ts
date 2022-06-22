import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../api/data';
import { removeById, update } from './helpers';

export interface DataState {
  data: Item[];
  selected: Item | undefined;
  selectedDrag: Item | undefined;
}

const initialState: DataState = {
  data: [],
  selected: undefined,
  selectedDrag: undefined,
};
interface UpdateItem {
  item: Item;
  removedId: number;
}
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
    setSelectedDrag: (state: DataState, action: PayloadAction<Item>) => {
      state.selectedDrag = action.payload;
    },
    deleteItem: (state: DataState, action: PayloadAction<{ id: number }>) => {
      state.data = removeById([...state.data], action.payload.id);
      state.selected = undefined;
    },
    updateItem: (state: DataState, action: PayloadAction<UpdateItem>) => {
      state.data = update(removeById([...state.data], action.payload.removedId), action.payload.item);
    },
  },
});

export const { actions, reducer } = data;
