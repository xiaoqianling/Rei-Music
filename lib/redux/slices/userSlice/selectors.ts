import {ReduxState} from "@/lib/redux/store";

export const selectUserDisplayName = (state: ReduxState) => {
  return state.user.displayName
}

export const selectIsLogin = (state: ReduxState) => {
  return state.user.login
}

export const selectLoginStatus = (state: ReduxState) => {
  return state.user.status
}

export const selectSignupStatus = (state: ReduxState) => {
  return state.user.signupStatus
}

export const selectCreatePlaylist = (state: ReduxState) => {
  return state.user.createPlaylist
}

export const selectUserId = (state: ReduxState) => {
  return state.user.id
}

export const selectUser = (state : ReduxState) => {
  return state.user
}
