// 管理所有的reducer

import {audioSlice} from "@/lib/redux/slices/audioSlice/audioSlice";
import {themeSlice} from "@/lib/redux/slices";

export const reducer = {
  audio: audioSlice.reducer,
  theme: themeSlice.reducer
}