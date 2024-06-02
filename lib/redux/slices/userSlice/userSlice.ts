import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Playlist} from "@/lib/types/songs";

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
  displayName: '测试账号',
  id: -1,
  createPlaylist: [],
  password: ''
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (loginInfo: LoginInfo, {rejectWithValue, dispatch}) => {
    try {
      let response;
      // 用邮箱还是用用户名登录
      if (loginInfo.username.includes('@')) {
        response = await axios.post(serverUrl + '/user/loginwithemail', {
          email: loginInfo.username,
          password: loginInfo.password
        }).catch((reason) => {
            console.log('登录失败')
            return reason
          }
        )
      } else {
        response = await axios.post(serverUrl + '/user/loginwithusername', {
          username: loginInfo.username,
          password: loginInfo.password
        }).catch((reason) => {
            console.log('登录失败')
            return reason
          }
        )
      }
      if (response.status === 200) {
        dispatch(fetchUserInfo(response.data.id));
        return response.data;
      } else {
        return rejectWithValue('登录失败');
      }
    } catch (error) {
      return rejectWithValue('登录失败');
    }
  }
)

export const signupUser = createAsyncThunk(
  'user/signup',
  async (loginInfo: LoginInfo, {rejectWithValue, fulfillWithValue}) => {
    //注册
    try {
      // 用邮箱注册
      if (loginInfo.username.includes('@')) {
        try {
          const response = await axios.put(serverUrl + '/user/signupByEmail', {
            displayName: loginInfo.displayName,
            email: loginInfo.username,
            password: loginInfo.password
          })
          if (response.status === 200) {
            return fulfillWithValue(response.data);
          } else {
            return rejectWithValue("邮箱已存在");
          }
        } catch (e) {
          return rejectWithValue("邮箱已存在");
        }
      } else {
        try {
          const response = await axios.put(serverUrl + '/user/signupByUsername', {
            displayName: loginInfo.displayName,
            username: loginInfo.username,
            password: loginInfo.password
          })
          if (response.status === 200) {
            return fulfillWithValue(response.data);
          } else {
            return rejectWithValue("用户名已存在");
          }
        } catch (e) {
          return rejectWithValue("用户名已存在");
        }
      }
    } catch
      (error) {
      return rejectWithValue('注册失败 原因未知');
    }
  }
)

// 创建一个用于获取用户信息的异步 Thunk action
export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserCreatePlaylist',
  async (userId: string, {rejectWithValue}) => {
    try {
      const response = await axios.get(serverUrl + '/user/createPlaylist?uid=' + userId);
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue('获取用户歌单失败');
      }
    } catch (error) {
      return rejectWithValue('获取用户歌单失败');
    }
  }
);

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
      // state.username = '';
      // state.id = -1
      // state.createPlaylist = []
      // state.password = ''
      // state.status = LoginStatus.Null;
      // state.signupStatus = SignupStatus.Null;
    }
  },
  extraReducers: (builder) => {
    builder
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
      .addCase(signupUser.fulfilled, (state, action) => {
        console.log(action.payload)
        // 注册完成的逻辑
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
      // 在用户登陆后 查询歌单信息
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.createPlaylist = action.payload;
      });
  }
});

export const {
  setStatus,
  signup,
  logoutUser
} = userSlice.actions
