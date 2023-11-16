// 管理所有的reducer

import {audioSlice} from "@/lib/redux/slices/audioSlice/audioSlice";

export const reducer = {
  audio: audioSlice.reducer
}