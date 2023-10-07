import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Song, localSong, serverSong} from "@/lib/types/song";

export interface AudioData {
    isPlaying: boolean,
    currentTime: number,
    playlist: Song[],
    currentIndex: number,
    songID: number,
    song: Howl | undefined
}

const initialState: AudioData = {
    isPlaying: false,
    currentTime: 0,
    playlist: serverSong,
    songID: 0,
    currentIndex: 0,
    song: undefined
}
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
        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload
        },
        /**
         * 播放指定id的歌曲
         */
        cutSongByID: (state, action: PayloadAction<number>) => {
            const song = state.playlist.find(song => song.id === action.payload)
            if (song !== undefined) {
                // state.isPlaying = true
                state.songID = action.payload
            }
        },
        playNextSong: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.playlist.length
            console.log("当前index", state.currentIndex)
            state.songID = state.playlist[state.currentIndex].id
        },
        playPrevSong: (state) => {
            state.currentIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length
            console.log("当前index", state.currentIndex)
            state.songID = state.playlist[state.currentIndex].id
        }
    }
})

export const {
    play,
    pause,
    setCurrentTime,
    playNextSong,
    playPrevSong,
    cutSongByID
} = audioSlice.actions