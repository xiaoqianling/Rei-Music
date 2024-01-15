import React from 'react';
import {Song} from "@/lib/types/song";

function Songlist({list, onDoubleClick}: { list: Song[] | undefined, onDoubleClick: (id: number) => void }) {
  return (
    <table className="border-collapse bg-default-200 w-full select-none mt-4">
      <thead>
      <tr className="font-bold">
        <td>歌曲</td>
        <td>歌手</td>
        <td>专辑</td>
        <td>时长</td>
      </tr>
      </thead>
      <tbody>
      {list && list.map(song => <SongItem key={song.id} song={song} onDoubleClick={onDoubleClick}/>)}
      </tbody>
    </table>
  );
}

function SongItem({song, onDoubleClick}: { song: Song, onDoubleClick: (id: number) => void}) {
  const handleDoubleClick = () => {
    onDoubleClick(song.id)
  }

  return (
    <tr key={song.id} className="hover:bg-default-50" onDoubleClick={handleDoubleClick}>
      <td className="py-1">{song.name}</td>
      <td>{song.singer}</td>
      <td></td>
      <td>{song.length}</td>
    </tr>
  )
}

export default Songlist;