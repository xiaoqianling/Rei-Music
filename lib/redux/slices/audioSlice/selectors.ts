// 选择器函数 接受state 返回需要的结果
import {ReduxState} from "@/lib/redux/store";
import {Song} from "@/lib/types/song";
import {createSelector} from "reselect";

export const selectIsPlaying = (state: ReduxState): boolean => {
  return state.audio.isPlaying
}
export const selectPlaylist = (state: ReduxState): Song[] => {
  // console.log('selector!')
  return state.audio.playlist
}
export const selectSongId = (state: ReduxState): number => {
  // console.log('selectSongId selector!')
  return state.audio.songID
}

export const selectCurrentSong = (state: ReduxState): Song|undefined => state.audio.currentSong;

export const selectVolume = (state: ReduxState): number => state.audio.volume;
export const selectCurrentTime = (state: ReduxState): number => state.audio.currentTime;
export const selectLength = (state: ReduxState): number => state.audio.length;


/*
 * @return 若无播放歌曲返回undefined
 */
export const selectSong = createSelector(
  [selectPlaylist, selectSongId],
  (playlist, id) => {
    if (playlist.length === 0)
      return undefined;
    return playlist.find(song => song.id === id);
  }
);