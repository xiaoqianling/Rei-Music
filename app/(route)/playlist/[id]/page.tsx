'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Song} from "@/lib/types/songs";
import {useRouter} from "next/navigation";
import Loading from "@/app/(sidebarNavi)/list/loading";
import {selectUserId, User} from "@/lib/redux/slices";
import {useDispatch, useSelector} from "@/lib/redux/store";
import Button from "@/ui/components/button";
import Songlist from "@/ui/components/list/Songlist";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import {deletePlaylist} from "@/lib/redux/slices/userSlice/chunk";

interface Info {
  playlistName: string,
  creator: User
}

function Page({params}: { params: { id: number } }) {
  const dispatch = useDispatch()
  const [songs, setSongs] = useState<Song[]>([])
  const [info, setInfo] = useState<Info>()
  const [loading, setLoading] = useState(true)
  const userId = useSelector(selectUserId)
  const router = useRouter()

  const {isOpen, onOpen, onClose} = useDisclosure()

  // 获取歌单里的歌曲
  useEffect(() => {
    axios.get(serverUrl + '/Song/getPlaylistSongs/' + params.id)
      .then(response => {
        setSongs(response.data)
        setLoading(false)
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          // router.push('/notfound')
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

  const handleDelete = () => {
    dispatch(deletePlaylist({uid: userId, pid: params.id}))
    onClose()
    router.push('/recommend')
  }

  return <>

    {loading ? <Loading/> :
      <>
        <div className='flex flex-row justify-between mb-3'>
          {songs.length === 0 ? <div>该歌单暂无歌曲</div> :
            <h3 className={"mb-3 text-xl font-bold"}>歌单：{info ? info.playlistName : "Not"}</h3>}
          {userId == info?.creator.id ? <Button error primary onClick={onOpen}>删除歌单</Button> :
            <h3 className={"mb-3 text-xl font-bold"}>由 {info ? info.creator.displayName : "未知用户"} 创建</h3>}
        </div>
        <Songlist songs={songs} pid={params.id} showTrash/>
      </>}

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>确定要删除歌单：{info?.playlistName}吗？</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          此操作不可恢复，请确认
        </ModalBody>
        <ModalFooter>
          <Button primary error onClick={handleDelete} className='mr-5'>
            删除
          </Button>
          <Button>取消</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
}

export default Page