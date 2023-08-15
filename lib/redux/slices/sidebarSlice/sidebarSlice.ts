import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {index: [-1, -1]}
export const sidebarSlice= createSlice({
    name: 'sidebar', initialState, reducers: {
        // 更新选中项
        indexUpdate: (state, action : PayloadAction<number[]>) => {
            state.index = action.payload;
        }
    }
})