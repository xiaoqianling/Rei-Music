'use client'
import React, {useState} from 'react';
import {Left, ListenSong, Refresh, Right, Search} from "@/app/ui/components/icons/homeIcons";
import {message, theme} from "antd";
import {usePathname} from "next/navigation";
import {refreshRoutes} from "@/config/config";
import Input from "antd/es/input/Input";
import TopBarCustomer from "@/app/ui/layout/top/customer";

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

  const searchBtn = <div className="cursor-pointer" onClick={searchSong}><Search/></div>

  return <div className={"flex h-full w-full"}>
    <div className={"flex items-center justify-start mr-3"}>
      {/*三个按键*/}
      <Left size={30} color={colorTextBase}/>
      <Right size={30} color={colorTextBase}/>
      {refreshRoutes.includes(pathname) && <Refresh size={16} color={colorTextBase} borderSize={30}/>}
    </div>

    <div className={"flex items-center justify-start w-72"}>
      {contextHolder}
      {/*搜索框*/}
      <Input placeholder={'搜索音乐'} className={"mr-4"} value={inputValue}
             prefix={isInput ? null : searchBtn}
             suffix={isInput ? searchBtn : null}
             onPressEnter={searchSong}
             onChange={(e) => setInputValue(e.target.value)}
             onFocus={() => {
               setIsInput(true)
             }}
             onBlur={() => inputValue === '' ? setIsInput(false) : null}/>
      {/*听歌识曲*/}
      <div className="cursor-pointer"><ListenSong size={30}/></div>
    </div>
    <div className={"flex items-center justify-end h-full flex-auto"}>
      <TopBarCustomer/>
    </div>
  </div>


}