import React, {FC, useRef} from 'react';
import Button from "@/ui/components/button";

interface Props {
  onChange: (files: FileList | null) => void,
  className?: string,
  acceptFileType?: string
}

const UploadButton: FC<Props> = ({onChange, className, acceptFileType}) => {
  const file_input = useRef<HTMLInputElement>(null);
  const handleUploadButton = () => {
    file_input.current?.click()
  }
  return (
    <div className={className}>
      <input className="border-none bg-purple-200 w-fit hidden" ref={file_input}
             accept={acceptFileType}
             type="file" onChange={(e) => onChange(e.target.files)}/>
      <Button onClick={handleUploadButton}>
        选择文件
      </Button>
    </div>
  );
}

export default UploadButton;