import logger from "redux-logger";
import { reducers } from "./reducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
    app: reducers.appReducer,
    users: reducers.usersReducer,
});

const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
