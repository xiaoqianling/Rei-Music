'use client'
import React from 'react'; // 移除多余的导入
import {useDispatch, useSelector} from "@/lib/redux/store";
import {cutSongByID, selectCurrentTheme, selectPlaylist} from "@/lib/redux/slices";
import styled from 'styled-components';
import {Song} from "@/lib/types/songs";
import {useRouter} from "next/navigation";

function CurrentSonglist() {
  const currentTheme = useSelector(selectCurrentTheme);
  const playlist = useSelector(selectPlaylist);
  const dispatch = useDispatch();

  const onDoubleClick = (id: number) => {
    dispatch(cutSongByID(id));
  };

  return (
    <table className="border-collapse w-full select-none mt-4" style={{ backgroundColor: currentTheme.config.sidebg }}>
      <thead>
      <tr className="font-bold">
        <td>歌曲</td>
        <td>歌手</td>
        <td>专辑</td>
        <td>时长</td>
      </tr>
      </thead>
      <tbody>
      {playlist.map(song => <SongItem key={song.id} song={song} onDoubleClick={onDoubleClick} />)}
      </tbody>
    </table>
  );
}

const Item = styled.tr`
    &:hover {
        background-color: ${props => props.color};
    }
`;

export function SongItem({ song, onDoubleClick }: { song: Song, onDoubleClick: (song: number) => void }) {
  const currentTheme = useSelector(selectCurrentTheme);
  const router = useRouter()

  const handleDoubleClick = () => {
    onDoubleClick(song.id);
  }

  const handleClick = () => {
    router.push('/music/'+song.id)
  }

  return (
    <>
      <Item key={song.id} color={currentTheme.config.hover} className="cursor-pointer"
            onDoubleClick={handleDoubleClick} onClick={handleClick}>
        <td className="py-1">{song.name}</td>
        <td>{song.singer ?? "无"}</td>
        <td>todo 专辑</td>
        <td>{song.duration}</td>
      </Item>
    </>
  );
}


export default CurrentSonglist;