import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "@/lib/redux/rootReducer";
import {TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector} from "react-redux";

export const reduxStore = configureStore({
  reducer,
  // todo 添加中间件
})

// 为什么要为钩子包装一下 直接用不一样吗？
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

//导出类型
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch;
