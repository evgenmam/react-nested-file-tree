import { createSelector } from '@reduxjs/toolkit';
import { Item } from 'api/data';

import { RootState } from '..';

export const getData = (state: RootState) => state.data;

export const selectData = createSelector(getData, (data) => {
  return data.data;
});

export const selectDataById = (id: number) =>
  createSelector(selectData, (data) => {
    const find = (arr: Item[], id: number): Item | undefined => {
      for (const obj of arr) {
        if (obj.id === id) return obj;
        const nestedObj: Item | undefined = find(obj.children, id);
        if (nestedObj) return nestedObj;
      }
    };
    return find(data, id);
  });
  
export const selectedItem = createSelector(getData, (data) => {
  return data.selected;
});
export const selectedDrag = createSelector(getData, (data) => {
  return data.selectedDrag;
});
