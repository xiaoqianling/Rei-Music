'use client'
import React, {Suspense, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import {cutSongByID, selectPlaylist} from "@/lib/redux/slices";
import SearchInput from "@/app/ui/layout/top/search-input";
import CurrentSonglist from "@/app/ui/components/list/currentSonglist";
import {Song} from "@/lib/types/songs";

function Page() {
  // songlist用于渲染列表
  const [songList, setSongList] = useState<Song[]>()
  const allSongs = useSelector(selectPlaylist)
  const dispatch = useDispatch()

  useEffect(() => {
    setSongList(allSongs)
  }, [allSongs])

  const searchSong = (keyword: string) => {
    const searchResult = allSongs.filter(song => song.name.includes(keyword) || song.singer.includes(keyword))
    setSongList(searchResult)
  }

  const doubleClick = (song: Song) => {
    dispatch(cutSongByID(song.id))
  }

  return (
    <div>
      <SearchInput onSearch={searchSong}/>
      <h3 className={"mb-3 text-xl"}>一共就这么点.</h3>
      <Suspense fallback={<div>列表错误</div>}>
        <CurrentSonglist/>
      </Suspense>
    </div>
  );
}

export default Page;