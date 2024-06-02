import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Song} from "@/lib/types/songs";
import {serverUrl} from "@/lib/api/music-api";

export enum AudioStatus {
  IDLE,
  LOADING,
  SUCCEED,
  FAILED
}

export interface AudioData {
  playlist: Song[],
  // 音乐在数组内索引
  currentIndex: number,
  // 当前的id
  songID: number,
  currentSong: Song | undefined,
  isPlaying: boolean,
  volume: number,
  length: number,
  // 当前时间
  currentTime: number,
  status: AudioStatus,
  error?: string
}

const initialState: AudioData = {
  playlist: [],
  // 当前播放歌曲index
  currentIndex: 0,
  songID: 0,
  currentSong: undefined,
  isPlaying: false,
  volume: 0.03,
  length: 0,
  currentTime: 0,
  status: AudioStatus.IDLE,
}

export const fetchMetadata = createAsyncThunk<Song[]>("audio/fetchMetadata",
  async () => {
    // 获取所有音乐 加入播放列表
    return await axios(serverUrl + '/Song/AllSongs').then(d => {
      return d.data
    })
  })

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    // 更新选中项
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    switchPlay: (state) => {
      state.isPlaying = !state.isPlaying
    },
    setSongDuration: (state, action: PayloadAction<number>) => {
      state.length = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    /**
     * 播放指定id的歌曲
     */
    cutSongByID: (state, action: PayloadAction<number>) => {
      const song = state.playlist.find(song => song.id === action.payload)
      if (song !== undefined) {
        state.isPlaying = true
        state.currentIndex = state.playlist.indexOf(song)
        state.currentSong = state.playlist[state.currentIndex]
        state.songID = state.currentSong.id
      }
    },
    playNextSong: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.playlist.length
      state.currentSong = state.playlist[state.currentIndex]
      state.songID = state.currentSong.id
    },
    playPrevSong: (state) => {
      state.currentIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length
      state.currentSong = state.playlist[state.currentIndex]
      state.songID = state.currentSong.id
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetadata.pending, (state) => {
        state.status = AudioStatus.LOADING
      })
      .addCase(fetchMetadata.fulfilled, (state, action) => {
        state.status = AudioStatus.SUCCEED
        state.playlist = action.payload
        state.currentSong = state.playlist[0]
        state.songID = state.currentSong.id
      })
      .addCase(fetchMetadata.rejected, (state, action) => {
        state.status = AudioStatus.FAILED
        state.error = action.error.message
        state.currentSong = state.playlist[0]
      })
  }
})

export const {
  play,
  pause,
  switchPlay,
  setSongDuration,
  setCurrentTime,
  setVolume,
  playNextSong,
  playPrevSong,
  cutSongByID
} = audioSlice.actions