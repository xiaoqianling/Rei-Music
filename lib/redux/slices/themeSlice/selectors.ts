// 选择器函数 接受state 返回需要的结果
import {ReduxState} from "@/lib/redux/store";
import {themeNames} from "@/config/themeConfig";

export const selectThemeName = (state : ReduxState) : themeNames => state.theme.themeName