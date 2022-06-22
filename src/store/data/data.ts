import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../api/data';

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
    resetSelected: (state: DataState) => {
      state.selected = undefined;
    },
    setSelectedDrag: (state: DataState, action: PayloadAction<Item>) => {
      state.selectedDrag = action.payload;
    },
    resetSelectedDrag: (state: DataState) => {
      state.selectedDrag = undefined;
    },
    deleteItem: (state: DataState, action: PayloadAction<{ id: number }>) => {
      console.log('Hello');
      const removeById = (arr: Item[], id: number): Item[] => {
        return arr
          .filter((a) => a.id !== id)
          .map((e) => {
            return { ...e, children: removeById(e.children || [], id) };
          });
      };
      state.data = removeById([...state.data], action.payload.id);
      state.selected = undefined;
    },
    updateItem: (state: DataState, action: PayloadAction<UpdateItem>) => {
      const removeById = (arr: Item[], id: number): Item[] => {
        return [...arr].filter((a) => a.id !== id).map((e) => {
          return { ...e, children: removeById(e.children || [], id) };
        });
      };
      const data = removeById([...state.data], action.payload.removedId);
      const update = (items: Item[], item: Item): Item[] => {
        const newItems = items.reduce<Item[]>((acc: Item[], cur: Item) => {
          if (cur.id === item.id) {
            acc.push(item);
          } else {
            acc.push({ ...cur, children: update(cur.children, item) });
          }
          return acc;
        }, []);

        return newItems;
      };

      state.data = update(data, action.payload.item);
    },
  },
});

export const { actions, reducer } = data;
