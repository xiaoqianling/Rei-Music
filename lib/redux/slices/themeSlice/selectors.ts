// 选择器函数 接受state 返回需要的结果
import {ReduxState} from "@/lib/redux/store";

export const selectThemeName = (state : ReduxState) : string => state.theme.themeName
export const selectThemeValue = (state : ReduxState) : string => state.theme.themeValue