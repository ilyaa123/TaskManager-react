import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        sort: 'abc'
    },
    reducers: {
        setSortValue: (state, action) => {
            state.sort = action.payload;
        }  
    }
});

export default sortSlice.reducer;

export const { setSortValue } = sortSlice.actions;