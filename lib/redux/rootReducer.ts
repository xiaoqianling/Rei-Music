// 管理所有的reducer

import {sidebarSlice} from "@/lib/redux/slices/sidebarSlice/sidebarSlice";

export const reducer = {
    sidebar: sidebarSlice.reducer,
}