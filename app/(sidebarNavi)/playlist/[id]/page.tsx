'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Song} from "@/lib/types/songs";
import Songlist from "@/app/ui/components/list/Songlist";
import {useRouter} from "next/navigation";
import Loading from "@/app/(sidebarNavi)/list/loading";
import {selectUserId, User} from "@/lib/redux/slices";
import {useSelector} from "@/lib/redux/store";
import Button from "@/app/ui/components/button";

interface Info {
  playlistName: string,
  creator: User
}

function Page({params}: { params: { id: number } }) {
  const [songs, setSongs] = useState<Song[]>([])
  const [info, setInfo] = useState<Info>()
  const [empty, setEmpty] = useState(false)
  const [loading, setLoading] = useState(true)
  const userId = useSelector(selectUserId)
  const router = useRouter()

  // 获取歌单里的歌曲
  useEffect(() => {
    axios.get(serverUrl + '/Song/getPlaylistSongs/' + params.id)
      .then(response => {
        setSongs(response.data)
        setLoading(false)
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          router.push('/notfound')
        } else if (error.response && error.response.status === 400) {
          setEmpty(true)
        } else {
        }
      })
  }, [params.id, router])

  // 查询歌单信息
  useEffect(() => {
    axios.get(serverUrl + '/Song/getPlaylistInfo/' + params.id)
      .then(response => {
        setInfo(response.data)
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
        } else {
          console.error('获取数据时出错:', error.message);
        }
      })
  }, [params.id])

  return <>
    {empty ? <div>该歌单暂无歌曲</div> : loading ? <Loading/> : <div>
      <div className='flex flex-row justify-between '>
        <h3 className={"mb-3 text-xl font-bold"}>歌单：{info ? info.playlistName : "Not"}</h3>
        {/*todo 添加用户主页*/}
        {userId == info?.creator.id ? <Button error primary>删除歌单</Button> :
          <h3 className={"mb-3 text-xl font-bold"}>由 {info ? info.creator.displayName : "未知用户"} 创建</h3>}
      </div>
      <Songlist songs={songs}/>
    </div>}
  </>
}

export default Page