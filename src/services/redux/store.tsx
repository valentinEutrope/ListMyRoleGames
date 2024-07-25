import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { DDApi } from "../api/DDApi/DDAPI";

const DDReducers = combineReducers({
    [DDApi.reducerPath]: DDApi.reducer,
    // [DDApi.races.reducerPath]: DDApi.races.reducer,
    // [DDApi.characters.reducerPath]: DDApi.characters.reducer,
})

const store = configureStore({
    reducer: {
        DDSlice: DDReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        DDApi.middleware
    )
})

setupListeners(store.dispatch);

export default store;