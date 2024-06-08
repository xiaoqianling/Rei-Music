'use client'
import React, {useEffect, useState} from 'react';
import {useSelector} from "@/lib/redux/store";
import {selectPlaylist} from "@/lib/redux/slices";
import {Song} from "@/lib/types/songs";
import Songlist from "@/ui/components/list/Songlist";

// 当前的歌单
function Page() {
  const [songList, setSongList] = useState<Song[]>()
  const allSongs = useSelector(selectPlaylist)

  useEffect(() => {
    setSongList(allSongs)
  }, [allSongs])

  return (
    <div>
      <h3 className={"mb-3 text-xl font-bold"}>当前歌曲列表</h3>
      {songList ? <Songlist songs={songList}/> : "列表为空"}
    </div>
  )
}

export default Page;