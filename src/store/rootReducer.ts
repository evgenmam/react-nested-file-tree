import { combineReducers } from "@reduxjs/toolkit";

import { reducer as data } from "./data/data";

export const rootReducer = combineReducers({
    data
});
