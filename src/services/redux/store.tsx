import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { DDApi } from "../api/DDApi/DDAPI";

const store = configureStore({
    reducer: {
        [DDApi.reducerPath]: DDApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        DDApi.middleware
    )
})

setupListeners(store.dispatch);

export default store;