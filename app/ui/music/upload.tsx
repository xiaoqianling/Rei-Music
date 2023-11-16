'use client'
import React, {useState} from "react";
import {UploadFile} from "antd/es/upload/interface";
import {Upload, UploadProps} from "antd";
import Button from "@/app/ui/components/button";

interface MyUploadProp {
  value?: UploadFile,
  onChange?: (value: UploadFile) => void

}

const CustomUpload: React.FC<MyUploadProp> = ({value, onChange}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleChange: UploadProps['onChange'] = (info) => {
    console.log('选择文件:', info)
    setFileList(info.fileList)
    // 必须通过onChange表单才能获取到value
    onChange?.(info.file)
  }

  const props = {
    onChange: handleChange,
  };

  return <Upload maxCount={1} fileList={fileList} {...props} beforeUpload={() => false}
                 accept={'.mp3,.ogg,.flac,.wav,.aac,.aiff'}>
    <Button primary>上传歌曲文件</Button>
  </Upload>
}
export default CustomUpload
