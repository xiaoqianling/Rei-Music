'use client'
import React, {useState} from 'react';
import {Left, ListenSong, Refresh, Right, Search} from "@/components/icons/homeIcons";
import {message, theme} from "antd";
import {usePathname} from "next/navigation";
import {refreshRoutes} from "@/config/config";
import Input from "antd/es/input/Input";
import TopBarCustomer from "@/components/layout/TopBar/TopBarCustomer";

export function TopBar() {
    const {
        token: {colorBgContainer, colorBgLayout, colorTextBase, colorPrimary},
    } = theme.useToken();
    const pathname = usePathname().substring(1);
    const [isInput, setIsInput] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    const [messageApi, contextHolder] = message.useMessage();

    const searchSong = (e: any) => {
        if (inputValue === '') {
            messageApi.open({
                type: "warning",
                content: '请输入歌名',
                style: {
                    marginTop: '8vh'
                }
            })
        } else {
            console.log(inputValue)
            e.target.blur()
        }
    }

    return <div style={{display: "flex", flexFlow: "row", height: '100%', width: '100%'}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "start", marginRight: 15}}>
            {/*三个按键*/}
            <Left size={30} color={colorTextBase}/>
            <Right size={30} color={colorTextBase}/>
            {refreshRoutes.includes(pathname) && <Refresh size={16} color={colorTextBase} borderSize={30}/>}
        </div>

        <div style={{display: "flex", alignItems: "center", justifyContent: "start", width: 280}}>
            {contextHolder}
            {/*搜索框*/}
            <Input placeholder={'搜索音乐'} style={{marginRight: 10}} value={inputValue}
                   prefix={isInput ? null : <Search/>}
                   suffix={isInput ? <Search/> : null}
                   onPressEnter={searchSong}
                   onChange={(e) => setInputValue(e.target.value)}
                   onFocus={() => {
                       setIsInput(true)
                   }}
                   onBlur={() => inputValue === '' ? setIsInput(false) : null}/>
            {/*听歌识曲*/}
            <ListenSong size={30}/>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "end", height: '100%', flex: 'auto'}}>
            <TopBarCustomer/>
        </div>
    </div>


}