'use client'
import React, {useState} from 'react';
import axios from "axios";

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            // 发送文件到后端API
            axios.put("http://localhost:8080/api/music/search/allsongs", formData)
                .then(response => response.data)
                .then(data => {
                    // 处理上传成功后的逻辑
                    console.log(data);
                })
                .catch(error => {
                    // 处理上传失败后的逻辑
                    console.error(error);
                });


        } else {
            alert('请先选择文件')
        }

    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUpload}>上传</button>
        </div>
    );
};

export default FileUpload;
