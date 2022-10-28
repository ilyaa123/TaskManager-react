import { configureStore } from "@reduxjs/toolkit";
import itemsRedusers from "./itemsSlice";

export const store = configureStore({
    reducer: {
        items: itemsRedusers,
    }
});