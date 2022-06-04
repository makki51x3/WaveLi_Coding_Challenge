import { configureStore} from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice";

export const store = configureStore({
    reducer:{eventReducer},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
