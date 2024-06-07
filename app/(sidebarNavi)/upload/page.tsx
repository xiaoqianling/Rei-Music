'use client'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import Button from "@/app/ui/components/button";
import axios from "axios";
import {fetchMetadata, selectCurrentTheme, selectIsLogin, selectUserId} from "@/lib/redux/slices";
import {serverUrl} from "@/lib/api/music-api";
import {FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select} from "@chakra-ui/react";
import UploadButton from "@/app/ui/upload/upload-button";
import {Playlist} from "@/lib/types/songs";


const Page: React.FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('');
  const [singer, setSinger] = useState<string>('');
  const [composer, setComposer] = useState<string>('');
  const [token, setToken] = useState('')
  const [file, setFile] = useState<File | null>(null);
  const currentTheme = useSelector(selectCurrentTheme)
  const isLogin = useSelector(selectIsLogin)

  // 验证状态
  const [nameInvalid, setNameInvalid] = useState(false)
  const [singerInvalid, setSingerInvalid] = useState(false)
  const [tokenInvalid, setTokenInvalid] = useState(false)
  const [fileInvalid, setFileInvalid] = useState(false)
  const [fileFormatInvalid, setFileFormatInvalid] = useState(false)

  // 用户创建的歌单
  const userId = useSelector(selectUserId)
  const [createPlaylist, setCreatePlaylist] = useState<Playlist[]>([])
  const [empty, setEmpty] = useState(false)
  const [uploadToPlaylistId, setUploadToPlaylistId] = useState<number>(0)

  // 获取用户创建的歌单
  useEffect(() => {
    if (isLogin) {
      axios.get(serverUrl + '/User/getCreatePlaylist?uid=' + userId)
        .then(response => {
          setCreatePlaylist(response.data)
          console.log(response.data)
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

  const onFinish = () => {
    let invalid = false;
    // 字段验证工作
    if (name == '') {
      setNameInvalid(true)
      invalid = true
    }
    if (singer == '') {
      setSingerInvalid(true)
      invalid = true
    }
    if (token !== 'upload') {
      console.log('invalid')
      setTokenInvalid(true)
      invalid = true
    }
    if (file == null) {
      setFileInvalid(true)
      return
    }
    if (!(file.type.includes('ogg') || file.type.includes('mpeg') || file.type.includes('flac'))) {
      console.log(file.type)
      setFileFormatInvalid(true)
      invalid = true
    }
    if (invalid) return
    const formData = new FormData();
    if (name && singer) {
      formData.append('songName', name);
      formData.append('singer', singer);
    }
    uploadToPlaylistId !== 0 && formData.append('pid', uploadToPlaylistId.toString())
    composer && formData.append('composer', composer);
    file && formData.append('file', file)
    console.log(formData)
    const url = uploadToPlaylistId !== 0 ? serverUrl + '/Song/uploadToPlaylist' : serverUrl + "/Song/upload"
    axios.post(url, formData,
      {headers: {"Content-Type": "multipart/form-data"}})
      .then(response => response.data)
      .then(data => {
        if (data.code === 200) {
          dispatch(fetchMetadata());
        }
        console.log("response:", data)
      })
      .catch(error => {
        console.error(error);
      });
  }

  // todo添加弹框

  // 处理输入验证
  const handleNameInput = (e: any) => {
    setName(e.target.value)
    if (e.target.value == '')
      setNameInvalid(true)
    else setNameInvalid(false)
  }
  const handleSingerInput = (e: any) => {
    setSinger(e.target.value)
    if (e.target.value == '')
      setSingerInvalid(true)
    else setSingerInvalid(false)
  }
  const handleComposerInput = (e: any) => {
    setComposer(e.target.value)
  }
  const handleTokenInput = (e: any) => {
    setToken(e.target.value)
    setTokenInvalid(false)

  }
  const handleFileChange = (files: FileList | null) => {
    if (files !== null && files.length > 0) {
      setFile(files[0]);
    }
    if (files == null || files[0] == null) {
      setFileInvalid(true)
      return
    } else setFileInvalid(false)
    if (!(files[0].type.includes('ogg') || files[0].type.includes('mp3') || files[0].type.includes('flac'))) {
      setFileFormatInvalid(true)
      return
    } else setFileFormatInvalid(false)
  }
  const handleSelectUploadPlaylist = (e: any) => {
    setUploadToPlaylistId(e.target.value)
  }

  return (
    <div>
      <FormControl isInvalid={nameInvalid} isRequired>
        <div className="font-bold mb-2">曲名 <span className='text-red-500'>*</span></div>
        <Input type='text' value={name} onChange={handleNameInput} width={80}
               focusBorderColor={currentTheme.config.primary}/>
        {nameInvalid && (
          <FormErrorMessage>歌曲名字段必需</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={singerInvalid} isRequired>
        <div className="font-bold mb-2">歌手名<span className='text-red-500'>*</span></div>
        <Input type='text' value={singer} onChange={handleSingerInput} width={80}
               focusBorderColor={currentTheme.config.primary}/>
        {singerInvalid && <FormErrorMessage>歌手字段必需</FormErrorMessage>}
      </FormControl>
      <FormControl>
        <FormLabel>作曲</FormLabel>
        <Input type='text' value={composer} onChange={handleComposerInput} width={80}
               focusBorderColor={currentTheme.config.primary}/>
      </FormControl>
      <FormControl isInvalid={tokenInvalid}>
        <FormLabel>上传凭证</FormLabel>
        <Input type='text' value={token} onChange={handleTokenInput} width={80}
               focusBorderColor={currentTheme.config.primary}/>
        {tokenInvalid ? <FormErrorMessage>您的凭证不正确，不能上传文件</FormErrorMessage> :
          <FormHelperText>为了防止恶意上传文件，请输入凭证</FormHelperText>}
      </FormControl>
      {/*列表*/}
      {empty || createPlaylist.length === 0 ? <div>您还没有创建歌单哦</div> :
        <FormControl>
          <FormLabel>要上传到的歌单</FormLabel>
          <Select width={150} value={uploadToPlaylistId} name={"选择要上传的歌单"} onChange={handleSelectUploadPlaylist}
                  borderColor={currentTheme.config.primary} focusBorderColor={currentTheme.config.primary}>
            <option value={0}>不上传到歌单</option>
            {createPlaylist.map(p => <option key={p.playlistId} value={p.playlistId}>{p.playlistName}</option>)}
          </Select>
        </FormControl>
      }


      <FormControl>
        <div className="font-bold mb-2">歌曲文件<span className='text-red-500'>*</span></div>
        <div className="flex flex-row items-center">
          <UploadButton onChange={handleFileChange} className="my-2" acceptFileType=".flac,.ogg,.mp3"/>
          <span>仅支持flac.MP3.ogg格式</span>
        </div>
        <div className={fileFormatInvalid ? 'text-red-500' : ''}>{file && file.name}</div>
        {fileInvalid && <span className='text-red-500'>文件是必需的</span>}
        {fileFormatInvalid && <span className='text-red-500'>请检查文件格式</span>}
      </FormControl>
      <Button type={"submit"} primary onClick={onFinish}>
        提交
      </Button>
    </div>
  )
};

export default Page;




