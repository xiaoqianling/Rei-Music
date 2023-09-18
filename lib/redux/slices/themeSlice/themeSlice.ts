import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : {themeName:string} = {themeName:'default'}
export const themeSlice= createSlice({
    name: 'theme', initialState, reducers: {
        // 更新选中项
        indexUpdate: (state, action : PayloadAction<string>) => {
            state.themeName = action.payload;
        }
    }
})