import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Theme, themeList} from "@/lib/types/theme";

const initialState : Theme = themeList.find(theme => theme.value === 'purple')!

export const themeSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    // action只附带主题的value代码即可
    changeTheme: (state, action:PayloadAction<string>)=>{
      let result = themeList.find(theme => theme.value === action.payload)
      if (result) {
        state.name = result.name
        state.value = result.value
        state.config = result.config
      }
    }
  }
})

export const {
  changeTheme
} = themeSlice.actions