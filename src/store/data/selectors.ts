import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';
import { find } from './helpers';

export const getData = (state: RootState) => state.data;

export const selectData = createSelector(getData, (data) => {
  return data.data;
});

export const selectDataById = (id: number) =>
  createSelector(selectData, (data) => {
    return find(data, id);
  });
  
export const selectedItem = createSelector(getData, (data) => {
  return data.selected;
});
export const selectedDrag = createSelector(getData, (data) => {
  return data.selectedDrag;
});
