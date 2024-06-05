'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Playlist} from "@/lib/types/songs";
import PlaylistCardList from "@/app/ui/components/list/playlistCardList";
import {useSelector} from "@/lib/redux/store";
import {selectUserDisplayName} from "@/lib/redux/slices";

function Page() {
  const [playlistData, setPlaylistData] = useState<Playlist[]>([]);
  const displayName = useSelector(selectUserDisplayName)

  // 在组件加载后获取歌单数据
  useEffect(() => {
    axios.get(serverUrl + '/song/allPlaylist')
      .then(response => {
        setPlaylistData(response.data)
      })
      .catch(error => {
        console.error('Error fetching playlist data:', error);
      });
  }, []);

  return (
    <div className="h-fit">
      <h1 className={"mb-4 text-3xl"}>推荐</h1>
      <h3 className={"mb-3 text-xl"}>Hi {displayName} 今日为你推荐</h3>
      <PlaylistCardList playlist={playlistData}/>
    </div>
  )
}

export default Page;