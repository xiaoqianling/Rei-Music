import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Song} from "@/lib/types/songs";

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
  playlist: [
    {
      "name": "买辣椒也用券 - 起风了",
      "singer": "买辣椒也用券",
      "duration": 325,
      "file_size": "0 MB",
      "song_url": "https://sharefs.tx.kugou.com/202405222050/9513bac6823f94b87d17c6325b267b62/v3/5c035cbf390fef6b536020a57749ef70/yp/full/a1000_u0_p409_s3779613493.mp3",
      "album_img": ""
    }
  ],
  // 当前播放歌曲index
  currentIndex: 0,
  currentSong: undefined,
  isPlaying: false,
  volume: 0.03,
  length: 0,
  currentTime: 0,
  status: AudioStatus.IDLE,
}

async function getSongInfo(response: any) {
  let songs: Song[] = [

  ]
  response.data.map((d: any) => console.log(d))
  // response.data.map(async (d: any) => {
  //   console.log(d.name)
  //   const [minutes, seconds] = d.duration.split(":").map(Number);
  //   const totalSeconds = minutes * 60 + seconds;
  //   let exist: boolean = true
  //   // TODO url 和其他信息
  //   console.log('url:', `https://dataiqs.com/api/kgmusic/?msg=${encodeURIComponent(d.name)}&type=&n=0`)
  //   const url = await axios.get(`https://dataiqs.com/api/kgmusic/?msg=${encodeURIComponent(d.name)}&type=&n=0`).then((data: any) => data?.song_url).catch((reason) => {
  //     console.log(`不存在${d.name}的信息`)
  //     exist = false
  //   })
  //   if (url !== '' && url !== '付费歌曲暂时无法获取歌曲下载链接') {
  //     exist = false
  //     console.log(`歌曲${d.name}信息不可知`)
  //   }
  //   if (exist)
  //     songs.push({
  //       album_img: d.album_img,
  //       duration: totalSeconds,
  //       file_size: d.file_size,
  //       song_url: url,
  //       singer: d.singername, name: d.name,
  //     })
  // })
  return songs
}

export const fetchMetadata = createAsyncThunk<Song[]>("audio/fetchMetadata",
  async () => {
    //&type=&n=0
    const response = await axios.get(`https://dataiqs.com/api/kgmusic/?msg=${encodeURIComponent("卡农")}`).then(data => data.data)
    return response
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
    cutSongByID: (state, action: PayloadAction<Song>) => {
      const song = state.playlist.find(song => song === action.payload)
      if (song !== undefined) {
        state.isPlaying = true
        state.currentIndex = state.playlist.indexOf(song)
        state.currentSong = state.playlist[state.currentIndex]
      }
    },
    playNextSong: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.playlist.length
      state.currentSong = state.playlist[state.currentIndex]
    },
    playPrevSong: (state) => {
      state.currentIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length
      state.currentSong = state.playlist[state.currentIndex]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetadata.pending, (state) => {
        state.status = AudioStatus.LOADING
      })
      .addCase(fetchMetadata.fulfilled, (state, action) => {
        state.status = AudioStatus.SUCCEED
        // state.playlist = action.payload.data
        state.currentSong = state.playlist[0]
        // }
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