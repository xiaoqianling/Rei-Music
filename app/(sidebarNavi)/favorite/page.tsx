'use client'
import React, {useEffect, useState} from 'react';
import {Song} from "@/lib/types/songs";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {notFound} from "next/navigation";
import Songlist from "@/app/ui/components/list/Songlist";
import {useSelector} from "@/lib/redux/store";
import {selectUserId} from "@/lib/redux/slices";

// 收藏音乐
function Page() {
  const [songs, setSongs] = useState<Song[]>([])
  const userId = useSelector(selectUserId)

  useEffect(() => {
    axios.get(serverUrl + '/User/getFavoriteSongs?uid=' + userId)
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
  }, [userId])

  return <div>
    您喜欢的音乐
    <Songlist songs={songs}/>
  </div>
}

export default Page;