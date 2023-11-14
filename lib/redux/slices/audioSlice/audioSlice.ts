import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {serverSong, Song} from "@/lib/types/song";
import axios from "axios";

export enum AudioStatus {
    IDLE,
    LOADING,
    SUCCEED,
    FAILED
}

export interface AudioData {
    isPlaying: boolean,
    playlist: Song[],
    currentIndex: number,
    songID: number,
    song: Howl | undefined,
    status: AudioStatus,
    error?: string
}

const initialState: AudioData = {
    isPlaying: false,
    playlist: serverSong,
    songID: 1,
    currentIndex: 0,
    song: undefined,
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
            console.log("当前index", state.currentIndex)
            state.songID = state.playlist[state.currentIndex].id
        },
        playPrevSong: (state) => {
            state.currentIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length
            console.log("当前index", state.currentIndex)
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
    playNextSong,
    playPrevSong,
    cutSongByID
} = audioSlice.actions