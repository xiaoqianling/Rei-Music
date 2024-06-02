'use client'
import React from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import {cutSongByID, selectCurrentTheme} from "@/lib/redux/slices";
import {Song} from "@/lib/types/songs";
import {SongItem} from "@/app/ui/components/list/currentSonglist";

function Songlist({songs}:{songs:Song[]}) {
  const currentTheme = useSelector(selectCurrentTheme)
  const dispatch = useDispatch()

  const onDoubleClick = (id : number) => {
    dispatch(cutSongByID(id))
  }

  return (
    <table className="border-collapse w-full select-none mt-4" style={{backgroundColor: currentTheme.config.sidebg}}>
      <thead>
      <tr className="font-bold">
        <td>歌曲</td>
        <td>歌手</td>
        <td>专辑</td>
        <td>时长</td>
      </tr>
      </thead>
      <tbody>
      {songs.map(song => <SongItem key={song.id} song={song}
                                      onDoubleClick={onDoubleClick}/>)}
      </tbody>
    </table>
  );
}

export default Songlist;