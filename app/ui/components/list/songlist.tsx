'use client'
import React, {Suspense, useEffect, useState} from 'react';
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import styled from 'styled-components';
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {Song} from "@/lib/types/songs";

async function fetchSongList(keyword: string) {
  const response = await axios.get(`https://dataiqs.com/api/kgmusic/?msg=${encodeURIComponent(keyword)}`);
  return response.data;
}

function Songlist() {
  const currentTheme = useSelector(selectCurrentTheme)
  const keyword = useSearchParams().get('keyword')!
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSongList(keyword);
        console.log('data:', data)
        return data
      } catch (error) {
        console.error('Error fetching song list:', error);
      }
    };
    if (keyword) {
      const getSongs: Song[] = []
      fetchData().then(
        (data: any) => {
          data.data.map((d: any, index: number) => {
            const [minutes, seconds] = d.duration.split(":").map(Number);
            const totalSeconds = minutes * 60 + seconds;
            // url需要单独获取
            getSongs.push({
              album_img: d.album_img,
              duration: totalSeconds,
              file_size: d.file_size,
              song_url: d.song_url,
              singer: d.singername, name: d.name, id: index
            })
          })
          console.log('result:', getSongs)
          setSongs(getSongs)
        }
      )
    }
  }, [keyword]);

  const onDoubleClick = () => {

  }

  return (
    //bg-default-200
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
        {songs && songs.map(song => <SongItem key={song.id} song={song}
                                              onDoubleClick={onDoubleClick}/>)}
        </tbody>
      </table>
  );
}

const Item = styled.tr`
    &:hover {
        background-color: ${props => props.color};
    }
`

function SongItem({song, onDoubleClick}: { song: Song, onDoubleClick: (song: Song) => void }) {
  const currentTheme = useSelector(selectCurrentTheme)
  const handleDoubleClick = () => {
    onDoubleClick(song)
  }

  return (
    <Item key={song.id} color={currentTheme.config.hover} onDoubleClick={handleDoubleClick}>
      <td className="py-1">{song.name}</td>
      <td>{song.singer}</td>
      <td></td>
      <td>{song.duration}</td>
    </Item>
  )
}

export default Songlist;