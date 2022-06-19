import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getData = (state: RootState) => state.data;

export const selectData = createSelector(getData, data => {
  return data.data;
});

export const selectLevel = createSelector(getData, data => {
  return data.level;
});
