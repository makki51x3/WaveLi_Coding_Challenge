import { configureStore} from "@reduxjs/toolkit";
import homePageReducer from "./slices/homePageSlice";

export const store = configureStore({
    reducer:{
        homePageReducer,
    },
});
