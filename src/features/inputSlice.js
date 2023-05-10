import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: 'inputValue',
    initialState: {
        inputContent: ""
    },
    reducers: {
        firstClick: (state, action) => {
            state.inputContent = action.payload
        }
    }
})

export const cleaned = state => state.inputValue.inputContent

export const { firstClick } = inputSlice.actions
export default inputSlice.reducer