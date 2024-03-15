import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            user: 'userLogged',
            updatedAt: Date.now().toLocaleString(),
            total: null,
            items: []
        }
    },

    reducers: {
        addItem: (state, actions) => {

            const existingItem = state.value.items.some((item) => item.id === actions.payload.id)

            if (!existingItem) {
                state.value.items = [...state.value.items, {...actions.payload}]
            
            } else {
                state.value.items = state.value.items.map((item) => {
                    if (item.id === actions.payload.id) {
                        return {...item,quantity : item.quantity + actions.payload.quantity}
                    }
                    return item
                })
            }

            state.total = state.value.items.reduce((acc,item) => acc = acc + (item.price * item.quantity),
            0)

        },

        removeItem: (state, action) => {

        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer