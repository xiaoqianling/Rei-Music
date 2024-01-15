'use client'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import {cutSongByID, selectPlaylist} from "@/lib/redux/slices";
import {Song} from "@/lib/types/song";
import SearchInput from "@/app/ui/layout/top/search-input";
import Songlist from "@/app/ui/components/list/songlist";

function Page() {
  // songlist用于渲染列表
  const [songList, setSongList] = useState<Song[]>()
  const allSongs = useSelector(selectPlaylist)
  const dispatch = useDispatch()

  useEffect(() => {
    setSongList(allSongs)
  }, [allSongs]);

  const searchSong = (keyword: string) => {
    const searchResult = allSongs.filter(song => song.name.includes(keyword) || song.singer.includes(keyword))
    setSongList(searchResult)
  }

  const doubleClick = (id: number) => {
    console.log('切歌id：', id)
    dispatch(cutSongByID(id))
  }

  return (
    <div>
      <SearchInput onSearch={searchSong}/>
      <Songlist list={songList} onDoubleClick={doubleClick}/>
    </div>
  );
}

export default Page;