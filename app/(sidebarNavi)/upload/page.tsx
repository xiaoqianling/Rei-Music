'use client'
import React, {useState} from 'react';
import {useDispatch} from "@/lib/redux/store";
import FormItem from "@/app/ui/upload/form-item";
import UploadButton from "@/app/ui/upload/upload-button";
import Button from "@/app/ui/components/button";
import axios from "axios";
import {fetchMetadata} from "@/lib/redux/slices";


const Page: React.FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('');
  const [singer, setSinger] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [composer, setComposer] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [verifyFiled, setVerifyFiled] = useState(false);

  const onFinish = (event: any) => {
    event.preventDefault()
    const formData = new FormData();
    if (name && singer) {
      formData.append('name', name);
      formData.append('singer', singer);
    } else {
      setVerifyFiled(true);
      return
    }
    album && formData.append('album', album);
    composer && formData.append('composer', composer);
    file && formData.append('file', file);
    axios.put("http://localhost:8080/api/music/file/withInfo", formData,
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
  };
  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return <div className={"w-96"}>
    <h1>添加歌曲</h1>
    <form onSubmit={onFinish}>
      <FormItem title="歌名" value={name} onChange={setName} required showError={verifyFiled}/>
      <FormItem title="歌手" value={singer} onChange={setSinger} required showError={verifyFiled}/>
      <FormItem title="专辑" value={album} onChange={setAlbum}/>
      <FormItem title="作曲" value={composer} onChange={setComposer}/>
      <UploadButton onChange={handleFileChange} className="my-2" acceptFileType=".flac,.ogg,.mp3"/>
      <Button type={"submit"} primary>
        上传
      </Button>
    </form>
  </div>
};

export default Page;




