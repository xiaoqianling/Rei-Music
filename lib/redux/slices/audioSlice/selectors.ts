// 选择器函数 接受state 返回需要的结果
import {ReduxState} from "@/lib/redux/store";
import {Song} from "@/lib/types/song";
import {createSelector, OutputSelectorFields} from "reselect";
import {AudioData, ThemeData} from "@/lib/redux/slices";
import {Howl} from "howler";

export const selectCurrentTime = (state: ReduxState): number => state.audio.currentTime
export const selectIsPlaying = (state: ReduxState): boolean => state.audio.isPlaying
export const selectPlaylist = (state: ReduxState): Song[] => state.audio.playlist
export const selectSongId = (state : ReduxState) : number => state.audio.songID

export const selectHowl = (state : ReduxState) : Howl|undefined => state.audio.song

const selectCurrentIndex = (state: ReduxState) => state.audio.currentIndex;


/*
 * @return 若无播放歌曲返回undefined
 */
export const selectSong = createSelector(
    [selectPlaylist, selectSongId],
    (playlist, id) => {
        console.log('selectSong触发！')
        if (playlist.length === 0)
            return undefined;
        return playlist.find(song => song.id === id);
    }
);