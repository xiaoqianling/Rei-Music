'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {notFound} from "next/navigation";
import {Playlist, Song} from "@/lib/types/songs";
import Songlist from "@/app/ui/components/list/Songlist";
import {Card} from "@/app/ui/components/card";
import PlaylistCardList from "@/app/ui/components/list/playlistCardList";

// 搜索结果页面
function Page({params}: { params: { keyword: string } }) {
  const [songs, setSongs] = useState<Song[]>([])
  const [playlist, setPlaylist] = useState<Playlist[]>([])

  useEffect(() => {
    axios.get(serverUrl + '/Song/SearchSongByKeyword?keyword=' + params.keyword)
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
  }, [params.keyword])

  useEffect(() => {
    axios.get(serverUrl + '/Song/SearchPlaylistByKeyword?keyword=' + params.keyword)
      .then(response => {
        setPlaylist(response.data)
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          // BUG
          notFound();
        } else {
          console.error('获取数据时出错:', error.message);
        }
      })
  }, [params.keyword])

  return (
    <div>
      <h3 className={"mb-3 text-xl font-bold"}>搜索：{params.keyword}</h3>
      {songs.length === 0 ? <h3 className={"mb-3 text-xl font-bold"}>未搜索到相关音乐</h3> :
        <>
          <h3 className={"mb-3 text-lg"}>搜索到的音乐</h3>
          <Songlist songs={songs}/></>
      }
      {playlist.length === 0 ? <h3 className={"mb-3 text-xl font-bold"}>未搜索到相关歌单</h3> :
        <>
          <h3 className={"mb-3 text-lg"}>搜索到的歌单</h3>
          <PlaylistCardList playlist={playlist}/>
        </>
      }

      <div className={"grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 py-2 gap-y-4 gap-x-4 sm:grid-cols-2"}>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
        <Card description={'描述'} playlistId={1}/>
      </div>

    </div>

  )
    ;
}

export default Page;