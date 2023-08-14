// 选择器函数 接受state 返回需要的结果
import {ReduxState} from "@/lib/redux/store";

export const selectIndex = (state : ReduxState) : number[] => state.sidebar.index