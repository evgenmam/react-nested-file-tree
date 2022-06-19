import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMsg {
  msg: string | any;
}

export interface ErrorState {
  msg: IMsg;
  status: string | null;
  id: string | null;
}

const initialState: ErrorState = {
  msg: { msg: null },
  status: null,
  id: null,
};

const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    returnErrors: (state: ErrorState, action: PayloadAction<ErrorState>) => {
      Object.assign(state, {
        msg: action.payload.msg ?? 'ups',
        status: action.payload.status,
        id: action.payload.id,
      });
    },
    clearErrors: (state: ErrorState) => {
      state = initialState;
    },
  },
});

export const { actions, reducer } = error;
