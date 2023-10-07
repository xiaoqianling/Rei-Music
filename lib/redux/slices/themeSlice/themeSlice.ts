import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ThemeData {
    themeName: string
}

const initialState: ThemeData = {themeName: 'default'}
export const themeSlice = createSlice({
    name: 'theme', initialState, reducers: {
        // 更新选中项
        indexUpdate: (state, action: PayloadAction<string>) => {
            state.themeName = action.payload;
        }
    }
})