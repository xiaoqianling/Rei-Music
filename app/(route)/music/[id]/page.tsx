'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import axios from "axios";
import {notFound} from "next/navigation";
import {Box, Card, CardBody, CardHeader, Divider, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import {serverUrl} from "@/lib/api/music-api";
import {Comment, Song} from "@/lib/types/songs";
import avatar from '@/public/background.jpg'

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
          notFound();
        } else {
          console.error('获取数据时出错:', error.message);
        }
      })
  }, [params.id])

  return <div>
    <h1 className={"mb-4 text-2xl font-bold"}>{song?.name} Singer：{song?.singer}</h1>
    <div className=" w-full h-96 flex flex-row items-center justify-around">
      <div className="w-64 h-64">
        <Image className="rounded-xl h-full object-cover" src={avatar} alt='假装封面'/>
      </div>
      <div>
        歌词？还没做啊
      </div>
    </div>
    <Divider/>

    <Card>
      <CardHeader>
        <Heading size='md'>Comments</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {comments.map(c =>
            <Box key={c.commentId}>
              <Heading size=''>
                {c.userDisplayName}:
              </Heading>
              <Text pt='2'>
                {c.content}
              </Text>
            </Box>)}
        </Stack>
      </CardBody>
    </Card>

    <h1 className={"mb-4 text-2xl font-bold"}>Comments</h1>
    <div>
      {comments.map(c =>
        <div key={c.commentId}>
          {c.userDisplayName} : {c.content}
        </div>)}
    </div>
  </div>
}

export default Page