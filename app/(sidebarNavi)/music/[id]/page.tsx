'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import avatar from '@/public/testUser/avatar.jpg'
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Comment, Song} from "@/lib/types/songs";
import {notFound} from "next/navigation";
import {Divider} from "@chakra-ui/react";

function Page({params}: { params: { id: number } }) {
  const [song, setSong] = useState<Song>()
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    axios.get(serverUrl + '/Song/GetSongInfo?sid=' + params.id)
      .then(response => {
        setSong(response.data)
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
    axios.get(serverUrl + '/Song/getCommentOfSong?sid=' + params.id)
      .then(response => {
        setComments(response.data)
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

  return <div>
    <h1 className={"mb-4 text-2xl font-bold"}>{song?.name} Singer：{song?.singer}</h1>
    <div className=" w-full h-96 flex flex-row items-center justify-around">
      <Image className="rounded-xl" src={avatar} width={240} height={240} alt='假装封面'/>
      <div>
        歌词？还没做啊
      </div>
    </div>
    <Divider/>
    <h1 className={"mb-4 text-2xl font-bold"}>Comments</h1>
    <div>
      评论嘛，能用就行！
      {comments.map(c => <div key={c.commentId}>
        {c.userDisplayName} : {c.content}
      </div>)}
    </div>
  </div>
}

export default Page