'use client'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import {cutSongByID, selectCurrentTheme, selectFavoriteSongs, selectIsLogin, selectUserId} from "@/lib/redux/slices";
import {Playlist, Song} from "@/lib/types/songs";
import {
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import {useRouter} from "next/navigation";
import {addMusicToPlaylist, deleteFavoriteSong, favoriteSong} from "@/lib/redux/slices/userSlice/chunk";
import axios from "axios";
import {serverUrl} from "@/lib/api/music-api";
import {Like, LikeActive, ListAdd, Trash} from "@/ui/components/icons/homeIcons";
import Button from "@/ui/components/button";

function Songlist({songs, showTrash, pid}: { songs: Song[], showTrash?: boolean, pid?: number }) {
  const dispatch = useDispatch()
  const isLogin = useSelector(selectIsLogin)
  const userId = useSelector(selectUserId)
  const favoriteSongs = useSelector(selectFavoriteSongs)
  const currentTheme = useSelector(selectCurrentTheme)

  const handleDoubleClick = (id: number) => {
    dispatch(cutSongByID(id))
  }

  const handleFavorite = (sid: number) => {
    if (isLogin)
      dispatch(favoriteSong({userId, sid}))
  }
  const handleRemoveFavorite = (sid: number) => {
    if (isLogin)
      dispatch(deleteFavoriteSong({userId, sid}))
  }
  const handleAddPlaylist = (sid: number, pid: number) => {
    if (isLogin)
      dispatch(addMusicToPlaylist({sid, pid}))
  }
  const handleTrash = (sid: number) => {
    if (pid !== undefined) {
      // dispatch(deleteMusicFromPlaylist({sid, pid}))
      location.reload()
    }
  }

  return (
    <>
      <TableContainer>
        <Table variant='striped' bgcolor={currentTheme.config.listbg} size='lg'>
          <Thead>
            <Tr>
              <Th>曲名</Th>
              <Th>歌手</Th>
              <Th>专辑</Th>
              <Th>时长</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map(song => <SongItem song={song} key={song.id} showTrash={showTrash} onTrash={handleTrash}
                                         isFavorite={favoriteSongs.find(s => s.id === song.id) !== undefined}
                                         onDoubleClick={handleDoubleClick} onAddPlaylist={handleAddPlaylist}
                                         onFavorite={handleFavorite} onRemoveFavorite={handleRemoveFavorite}/>)}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

function SongItem({song, onDoubleClick, onFavorite, onRemoveFavorite, onAddPlaylist, isFavorite, showTrash, onTrash}: {
  song: Song, onDoubleClick: (song: number) => void,
  onFavorite: (sid: number) => void,
  onAddPlaylist: (sid: number, pid: number) => void,
  isFavorite?: boolean,
  onRemoveFavorite: (sid: number) => void,
  showTrash?: boolean,
  onTrash?: (sid: number) => void
}) {
  const currentTheme = useSelector(selectCurrentTheme);
  const router = useRouter()
  const userId = useSelector(selectUserId)
  const isLogin = useSelector(selectIsLogin)
  // 模态
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [createPlaylist, setCreatePlaylist] = useState<Playlist[]>([])
  const [empty, setEmpty] = useState(false)
  const [uploadToPlaylistId, setUploadToPlaylistId] = useState<string>('0')

  // 获取用户创建的歌单
  useEffect(() => {
    if (isLogin) {
      axios.get(serverUrl + '/User/getCreatePlaylist?uid=' + userId)
        .then(response => {
          setCreatePlaylist(response.data)
          setUploadToPlaylistId(response.data[0].playlistId)
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            setEmpty(true)
          } else if (error.response && error.response.status === 400) {
            setEmpty(true)
          } else {
          }
        })
    }
  }, [isLogin, userId])

  // 处理单击、双击冲突
  let clickTimer: any = null;
  let isDoubleClick = false;

  const handleSingleClick = () => {
    if (!isDoubleClick) {
      clickTimer = setTimeout(() => {
        if (!isDoubleClick) {
          router.push('/music/' + song.id);
        }
        clickTimer = null;
      }, 300);
    }
  };

  const handleDoubleClick = () => {
    clearTimeout(clickTimer);
    onDoubleClick(song.id);
    isDoubleClick = true;
    setTimeout(() => {
      isDoubleClick = false;
    }, 300);
  }

  const handleSelectUploadPlaylist = (e: any) => {
    setUploadToPlaylistId(e.target.value)
  }

  const paddingY = 3

  return (
    <>
      <Tr className="cursor-pointer"
          onDoubleClick={handleDoubleClick} onClick={handleSingleClick}>
        <Td paddingY={paddingY}>{song.name}</Td>
        <Td paddingY={paddingY}>{song.singer}</Td>
        <Td paddingY={paddingY}>暂无专辑</Td>
        <Td paddingY={paddingY}>暂无时长</Td>
        <Td paddingY={paddingY}>
          <div className='flex flex-row'>
            <Tooltip label="收藏音乐">
              <span className="mr-5"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (isFavorite)
                        onRemoveFavorite(song.id)
                      else onFavorite(song.id)
                    }}>{isFavorite ? <LikeActive/> : <Like/>}
              </span>
            </Tooltip>
            {/*添加模态*/}
            <Tooltip label="添加到歌单">
              <span className="mr-5"
                onClick={(e) => {
                  e.stopPropagation()
                  if (isLogin) onOpen()
                }}><ListAdd/>
              </span>
            </Tooltip>
            {showTrash && <Tooltip label="从歌单中移除">
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  if (isLogin)
                    onTrash && onTrash(song.id)
                }}><Trash/>
              </span>
            </Tooltip>}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay/>
              <ModalContent>
                <ModalHeader>添加到您的歌单</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                  {
                    empty || createPlaylist.length === 0 ? <div>您还没有创建歌单哦</div> :
                      <FormControl>
                        {/*todo 不能上传到已存在的歌单*/}
                        <Select width={150} value={uploadToPlaylistId} name={"选择要上传的歌单"}
                                onChange={handleSelectUploadPlaylist}
                                borderColor={currentTheme.config.primary}
                                focusBorderColor={currentTheme.config.primary}>
                          {createPlaylist.map(p =>
                            <option key={p.playlistId} value={p.playlistId} className=''>
                              {p.playlistName}
                            </option>)
                          }
                        </Select>
                      </FormControl>
                  }
                </ModalBody>

                <ModalFooter>
                  <Button primary className="mr-5" onClick={() => {
                    onAddPlaylist(song.id, parseInt(uploadToPlaylistId))
                    onClose()
                  }}>
                    添加
                  </Button>
                  <Button onClick={onClose}>取消</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </Td>
      </Tr>
    </>
  );
}

export default Songlist;