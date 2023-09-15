'use client'
import React from 'react';
import {Left, ListenSong, Refresh, Right} from "@/components/icons/homeIcons";
import {theme} from "antd";
import {usePathname} from "next/navigation";
import {refreshRoutes} from "@/config/config";
import Input from "antd/es/input/Input";
import {SearchOutlined} from "@ant-design/icons";
import TopBarCustomer from "@/components/layout/TopBar/TopBarCustomer";

export function NewTopBar() {
    const {
        token: {colorBgContainer, colorBgLayout, colorTextBase},
    } = theme.useToken();
    const pathname = usePathname().substring(1);
    return <div style={{display:"flex", flexFlow:"row",height: '100%', width:'100%'}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "start", marginRight:15}}>
            {/*三个按键*/}
            <Left size={30} color={colorTextBase}/>
            <Right size={30} color={colorTextBase}/>
            {refreshRoutes.includes(pathname) && <Refresh size={16} color={colorTextBase} borderSize={30}/>}
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "start", width:280}}>
            {/*搜索框*/}
            <Input placeholder={'搜索音乐'} prefix={<SearchOutlined/>} style={{marginRight:10}}/>
            {/*听歌识曲*/}
            <ListenSong size={30}/>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "end", height: '100%', flex:'auto'}}>
            <TopBarCustomer/>
        </div>
    </div>


}