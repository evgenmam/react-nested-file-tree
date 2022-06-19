import { combineReducers } from "@reduxjs/toolkit";

import { reducer as error } from "./error/error";

import { reducer as data } from "./data/data";

export const rootReducer = combineReducers({
    error,
    data
});
