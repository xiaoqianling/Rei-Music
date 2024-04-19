import {ReduxState} from "@/lib/redux/store";
import {Theme} from "@/lib/types/theme";

export const selectCurrentTheme = (state: ReduxState): Theme => {
  return state.theme
}