'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Song} from "@/lib/types/songs";
import Songlist from "@/app/ui/components/list/Songlist";
import {notFound} from "next/navigation";

interface Info {
  playlistName: string,
  creator: string
}

function Page({params}: { params: { id: number } }) {
  const [songs, setSongs] = useState<Song[]>([])
  const [info, setInfo] = useState<Info>()

  useEffect(() => {
    axios.get(serverUrl + '/Song/playlistSongs/' + params.id)
      .then(response => {
        setSongs(response.data)
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          // BUG
          notFound();
        } else {
          console.error('获取数据时出错:', error.message);
        }
      })
  }, [params.id])

  useEffect(() => {
    axios.get(serverUrl + '/Song/searchPlaylistById/' + params.id)
      .then(response => {
        // todo 获取歌单信息
        setInfo(response.data)
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          notFound();
        } else {
          console.error('获取数据时出错:', error.message);
        }
      })
  }, [params.id]);

  return <div>
    {params.id} - 歌单：{info?.playlistName} - 创建者：{info?.creator}
    <Songlist songs={songs}/>
  </div>
}

export default Page