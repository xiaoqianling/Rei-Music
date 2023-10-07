// 管理所有的reducer

import {themeSlice} from "@/lib/redux/slices/themeSlice/themeSlice";
import {audioSlice} from "@/lib/redux/slices/audioSlice/audioSlice";

export const reducer = {
    theme: themeSlice.reducer,
    audio: audioSlice.reducer
}