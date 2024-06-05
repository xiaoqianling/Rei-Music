'use client'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import {selectPlaylist} from "@/lib/redux/slices";
import {Song} from "@/lib/types/songs";
import Songlist from "@/app/ui/components/list/Songlist";

function Page() {
  const [songList, setSongList] = useState<Song[]>()
  const allSongs = useSelector(selectPlaylist)
  const dispatch = useDispatch()

  useEffect(() => {
    setSongList(allSongs)
  }, [allSongs])

  return (
    <div>
      <h3 className={"mb-3 text-xl font-bold"}>当前歌单</h3>
      {songList ? <Songlist songs={songList}/> : "列表为空"}
    </div>
  )
}

export default Page;