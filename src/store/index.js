import { configureStore } from "@reduxjs/toolkit";
import itemsRedusers from "./itemsSlice";
import sortRedusers from "./sortSlice";

export const store = configureStore({
    reducer: {
        items: itemsRedusers,
        sort: sortRedusers
    }
});