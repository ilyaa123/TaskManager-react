import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: JSON.parse(localStorage.getItem('items')) || [],
    },
    reducers: {
        setItem: (state, action) => {
            state.items = [...state.items, {item: action.payload, active: 'false', homemade: []}];
            state.items = state.items.map(elem => {
                if (action.payload === elem.item){
                    elem.active = 'true';
                } else {
                    elem.active = 'false';
                }
                return elem
            })
            localStorage.setItem('items', JSON.stringify(state.items));

        },
        setHomemade: (state, action) => {
            state.items = state.items.map(elem => {
                if (action.payload.item === elem.item){
                    elem.homemade = [...elem.homemade, action.payload.homemade]
                }
                return elem
            });
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        setActive: (state, action) => {
            state.items = state.items.map(elem => {
                if (action.payload === elem.item){
                    elem.active = 'true';
                } else {
                    elem.active = 'false';
                }
                return elem
            });
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        deleteHomemade: (state, action) => {
            state.items = state.items.map(elem => {
                const newHomemade = elem.homemade.filter(made => made.name !== action.payload.name && made.date !== action.payload.date);
                return {...elem, homemade: newHomemade}
            });
            localStorage.setItem('items', JSON.stringify(state.items));
        }
    }
});

export default itemsSlice.reducer;

export const { setItem } = itemsSlice.actions;
export const { setHomemade } = itemsSlice.actions;
export const { setActive } = itemsSlice.actions;
export const { deleteHomemade } = itemsSlice.actions;
