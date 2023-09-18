// 管理所有的reducer

import {themeSlice} from "@/lib/redux/slices/themeSlice/themeSlice";

export const reducer = {
    theme: themeSlice.reducer
}