import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {localSong, serverSong, Song} from "@/lib/types/song";
import axios from "axios";

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
  // 音乐ID标识
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
  playlist: localSong,
  // 当前播放歌曲id 为什么要从春日影开始!!!!!
  songID: 0,
  // 当前播放歌曲index
  currentIndex: 0,
  currentSong: undefined,
  isPlaying: false,
  volume: 0.03,
  length: 0,
  currentTime: 0,
  status: AudioStatus.IDLE,
}

export const fetchMetadata = createAsyncThunk<Song[]>("audio/fetchMetadata",
  async () => {
    const response = await axios.get('http://localhost:8080/api/music/search/allsongs')
    return response.data
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
    setSongDuration: (state, action:PayloadAction<number>) => {
      state.length = action.payload
    },
    setCurrentTime: (state, action:PayloadAction<number>) => {
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
        // state.isPlaying = true
        state.songID = action.payload
        state.currentIndex = state.playlist.indexOf(song);
      }
    },
    playNextSong: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.playlist.length
      state.songID = state.playlist[state.currentIndex].id
    },
    playPrevSong: (state) => {
      state.currentIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length
      state.songID = state.playlist[state.currentIndex].id
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetadata.pending, (state) => {
        state.status = AudioStatus.LOADING
      })
      .addCase(fetchMetadata.fulfilled, (state, action) => {
        state.status = AudioStatus.SUCCEED
        const idList = state.playlist.map(song => song.id)
        state.playlist = state.playlist.concat(action.payload.filter(song => !(idList.includes(song.id)))
          .map(song => {
            song.url = "http://localhost:8080/api/music/file/" + song.filename
            return song
          }))
        if (state.playlist.find(song => song.id === state.songID) == undefined) {
          state.songID = state.playlist[0].id
        }
      })
      .addCase(fetchMetadata.rejected, (state, action) => {
        state.status = AudioStatus.FAILED
        state.error = action.error.message
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