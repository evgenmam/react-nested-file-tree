import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getError = (state: RootState) => state.error;

export const selectError= createSelector(getError, error => {
  return error;
});

