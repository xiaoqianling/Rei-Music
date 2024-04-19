import React from 'react';
import {Song} from "@/lib/types/song";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import styled from 'styled-components';

function Songlist({list, onDoubleClick}: { list: Song[] | undefined, onDoubleClick: (id: number) => void }) {
  const currentTheme = useSelector(selectCurrentTheme)
  return (
    //bg-default-200
    <table className="border-collapse w-full select-none mt-4" style={{backgroundColor:currentTheme.config.sidebg}}>
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

const Item = styled.tr`
    &:hover {
        background-color: ${props => props.color};
    }
`
function SongItem({song, onDoubleClick}: { song: Song, onDoubleClick: (id: number) => void}) {
  const currentTheme = useSelector(selectCurrentTheme)
  const handleDoubleClick = () => {
    onDoubleClick(song.id)
  }

  return (
    <Item key={song.id} color={currentTheme.config.hover} onDoubleClick={handleDoubleClick}>
      <td className="py-1">{song.name}</td>
      <td>{song.singer}</td>
      <td></td>
      <td>{song.length}</td>
    </Item>
  )
}

export default Songlist;