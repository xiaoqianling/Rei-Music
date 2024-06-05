import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginInfo} from "@/lib/redux/slices";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";

// 登录
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
            return reason
          }
        )
      } else {
        response = await axios.post(serverUrl + '/user/loginwithusername', {
          username: loginInfo.username,
          password: loginInfo.password
        }).catch((reason) => {
            return reason
          }
        )
      }
      if (response.status === 200) {
        dispatch(fetchUserCreatePlaylist(response.data.id))
        dispatch(fetchUserFavoriteSongs(response.data.id))
        return response.data
      } else {
      }
    } catch (error) {
    }
  }
)

// 注册
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

// 获取用户创建歌单
export const fetchUserCreatePlaylist = createAsyncThunk(
  'user/fetchUserCreatePlaylist',
  async (userId: number, {rejectWithValue}) => {
    try {
      const response = await axios.get(serverUrl + '/user/getCreatePlaylist?uid=' + userId);
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue('获取用户歌单失败');
      }
    } catch (error) {
      return rejectWithValue('获取用户歌单失败');
    }
  }
)

// 获取用户收藏音乐
export const fetchUserFavoriteSongs = createAsyncThunk(
  'user/fetchUserFavoriteSongs',
  async (userId: number, {rejectWithValue}) => {
    try {
      const response = await axios.get(serverUrl + '/User/getFavoriteSongs?uid=' + userId);
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue('获取用户收藏音乐失败');
      }
    } catch (error) {
      return rejectWithValue('获取用户收藏音乐失败');
    }
  }
)

// 创建歌单
export const createPlaylist = createAsyncThunk(
  'user/createPlaylist',
  async ({userId, name}: { userId: number, name: string }, {rejectWithValue, dispatch, fulfillWithValue}) => {
    try {
      const response = await axios.post(serverUrl + '/user/createPlaylist', {
        'uid': userId,
        'playlistName': name
      });
      if (response.status === 200) {
        dispatch(fetchUserCreatePlaylist(userId))
        return response.data;
      } else {
        return rejectWithValue('创建歌单完成');
      }
    } catch (error) {
      return rejectWithValue('创建歌单失败');
    }
  }
)

// 添加音乐到收藏
export const favoriteSong = createAsyncThunk(
  'user/favoriteSong',
  async ({userId, sid}: { userId: number, sid: number }, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.post(serverUrl + '/User/addFavoriteSongs?uid=' + userId + '&sid=' + sid);
      if (response.status === 200) {
        dispatch(fetchUserFavoriteSongs(userId))
        return response.data;
      } else {
        return rejectWithValue('获取用户歌单失败');
      }
    } catch (error) {
      return rejectWithValue('获取用户歌单失败');
    }
  }
)

// 移除收藏音乐
export const deleteFavoriteSong = createAsyncThunk(
  'user/deleteFavoriteSong',
  async ({userId, sid}: { userId: number, sid: number }, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.delete(serverUrl + '/User/deleteFavoriteSongs?uid=' + userId + '&sid=' + sid);
      if (response.status === 200) {
        dispatch(fetchUserFavoriteSongs(userId))
        return response.data;
      } else {
        return rejectWithValue('删除用户歌单失败');
      }
    } catch (error) {
      return rejectWithValue('删除用户歌单失败');
    }
  }
)