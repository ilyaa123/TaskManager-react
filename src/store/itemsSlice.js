import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: JSON.parse(localStorage.getItem('items')) || [],
    },
    reducers: {
        setItem: (state, action) => {
            console.log('setItem');
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
            console.log('setHomemade');
            state.items = state.items.map(elem => {
                if (action.payload.item === elem.item){
                    elem.homemade = [...elem.homemade, action.payload.homemade]
                }
                return elem
            });
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        setActive: (state, action) => {
            console.log('setActive');
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
            console.log('deleteHomemade');
            state.items = state.items.map(elem => {
                if (elem.item === action.payload[1]){
                    const newHomemade = elem.homemade.filter(made => {
                        if ((made.name === action.payload[0].name) && (made.date === action.payload[0].date)){
                            return false
                        } else {
                            return true
                        }
                    });
                    return {...elem, homemade: newHomemade}
                } else {
                    return{...elem}
                }
            });
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        deleteItem: (state, action) => {
            console.log('deleteItem');
            console.log(state.items);
            state.items = state.items.filter(elem => elem.item !== action.payload);

            if (state.items.length > 0){
                state.items = state.items.map(elem => { return {...elem, active: 'false'}});

                state.items[0].active = 'true'
            }

            localStorage.setItem('items', JSON.stringify(state.items));
        }
    }
});

export default itemsSlice.reducer;

export const { setItem } = itemsSlice.actions;
export const { setHomemade } = itemsSlice.actions;
export const { setActive } = itemsSlice.actions;
export const { deleteHomemade } = itemsSlice.actions;
export const { deleteItem } = itemsSlice.actions;
