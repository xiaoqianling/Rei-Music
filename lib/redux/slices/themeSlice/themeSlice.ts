import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {themeNameMap} from "@/config/themeConfig";

export interface ThemeData {
    themeName: string,
    themeValue: string
}

const initialState: ThemeData = {themeName: '默认主题', themeValue: 'default'}
export const themeSlice = createSlice({
    name: 'theme', initialState, reducers: {
        // 更新选中项
        themeChange: (state, action: PayloadAction<ThemeData>) => {
            state = action.payload;
        },
        themeChangeByValue: (state, action: PayloadAction<string>) => {
            state.themeValue = action.payload;
            state.themeName = themeNameMap.get(action.payload)!
        }
    }
})

export const {themeChange, themeChangeByValue} = themeSlice.actions