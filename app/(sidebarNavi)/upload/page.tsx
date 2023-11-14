'use client'
import React from 'react';
import axios from "axios";
import {Button, Form, message, Typography} from "antd";
import Input from "antd/es/input/Input";
import {UploadFile} from "antd/es/upload/interface";
import {useDispatch} from "@/lib/redux/store";
import {fetchMetadata} from "@/lib/redux/slices";
import styled from "styled-components";
import CustomUpload from "@/app/(sidebarNavi)/upload/CustomUpload";

const Container = styled.div`
  width: 500px;
`

const Page: React.FC = () => {
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage()

    const onFinish = (values: any) => {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('singer', values.singer)
        values.album && formData.append('album', values.album)
        values.composer && formData.append('album', values.composer)
        formData.append('file', values.file)
        console.log(formData)
        axios.put("http://localhost:8080/api/music/file/withInfo", formData,
            {headers: {"Content-Type": "multipart/form-data"}})
            .then(response => response.data)
            .then(data => {
                if (data.code === 200) {
                    dispatch(fetchMetadata());
                    messageApi.success("文件添加成功").then()
                }
            })
            .catch(error => {
                console.error(error);
                messageApi.error("文件添加失败").then()
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
        singer?: string;
        album?: string;
        composer?: string,
        file?: UploadFile
    };

    return <Container>
        {contextHolder}
        <Typography.Title level={3} style={{textAlign: "center"}}>添加歌曲</Typography.Title>
        <Form
            name="basic"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="歌曲名"
                name="name"
                rules={[{required: true, message: '歌曲名必填!'}]}
            >
                <Input maxLength={40} showCount allowClear/>
            </Form.Item>
            <Form.Item<FieldType>
                label="歌手"
                name="singer"
                rules={[{required: true, message: '歌手名必填!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item<FieldType>
                label="专辑名"
                name="album"
            >
                <Input/>
            </Form.Item>
            <Form.Item<FieldType>
                label="作曲"
                name="composer"
            >
                <Input/>
            </Form.Item>
            <Form.Item<FieldType>
                label="音乐文件"
                name="file"
                rules={[{required: true, message: '文件必填!'}]}
            >
                <CustomUpload/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 10, span: 16}}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    </Container>
};

export default Page;




