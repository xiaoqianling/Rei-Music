import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Playlist, Song} from "@/lib/types/songs";
import {
  createPlaylist,
  fetchUserCreatePlaylist,
  fetchUserFavoriteSongs,
  loginUser,
  signupUser
} from "@/lib/redux/slices/userSlice/chunk";

export enum LoginStatus {
  Fail, Success, Null
}

export enum SignupStatus {
  OK, EmailExist, UsernameExits, Null, Unknown
}

export interface User {
  login: boolean
  status: LoginStatus
  signupStatus: SignupStatus
  username: string
  displayName: string
  id: number
  createPlaylist: Playlist[]
  favoriteSongs: Song[]
  password: string
}

export interface LoginInfo {
  displayName?: string
  username: string,
  password: string,
}

const initialState: User = {
  username: '',
  login: false,
  status: LoginStatus.Null,
  signupStatus: SignupStatus.Null,
  displayName: '未登录用户',
  id: -1,
  createPlaylist: [],
  favoriteSongs: [],
  password: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<LoginStatus>) => {
      state.status = action.payload
    },
    signup: (state, action: PayloadAction<LoginInfo>) => {

    },
    logoutUser: (state) => {
      state.displayName = '测试账号'
      state.login = false;
    },
    createPlaylist: (state, action: PayloadAction<string>) => {

    }
  },
  extraReducers: (builder) => {
    builder
      // 登录逻辑
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login = true;
        state.displayName = action.payload.displayName
        state.username = action.payload.username
        state.id = action.payload.id
        state.status = LoginStatus.Success
        state.password = action.payload.password
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('登陆失败')
        state.status = LoginStatus.Fail
      })
      // 注册逻辑
      .addCase(signupUser.fulfilled, (state, action) => {
        console.log(action.payload)
        state.login = true;
        state.signupStatus = SignupStatus.OK
        state.id = action.payload.id
        state.displayName = action.payload.displayName;
        state.username = action.payload.username;
        state.createPlaylist = []
        state.password = action.payload.password
      })
      .addCase(signupUser.rejected, (state, action) => {
        console.log('注册失败', action.payload)
        if (action.payload == '用户名已存在')
          state.signupStatus = SignupStatus.UsernameExits
        else if (action.payload == '邮箱已存在')
          state.signupStatus = SignupStatus.EmailExist
        else
          state.signupStatus = SignupStatus.Unknown
      })
      // 查询创建歌单
      .addCase(fetchUserCreatePlaylist.fulfilled, (state, action) => {
        state.createPlaylist = action.payload;
      })
      .addCase(createPlaylist.fulfilled, (state, action) => {

      })
      // 查询收藏音乐
      .addCase(fetchUserFavoriteSongs.fulfilled, (state, action) => {
        state.favoriteSongs = action.payload
      })
  }
});

export const {
  setStatus,
  signup,
  logoutUser
} = userSlice.actions
