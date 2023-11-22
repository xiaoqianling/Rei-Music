'use client'
import React, {useState} from 'react';
import {Left, ListenSong, Refresh, Right} from "@/app/ui/components/icons/homeIcons";
import {usePathname} from "next/navigation";
import {refreshRoutes} from "@/config/config";
import TopBarCustomer from "@/app/ui/layout/top/customer";
import SearchInput from "@/app/ui/layout/top/search-input";

export function TopBar() {
  const pathname = usePathname().substring(1);
  const [isInput, setIsInput] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const searchSong = (e: any) => {
    if (inputValue === '') {
      console.log("查询为空")
    } else {
      console.log("搜索歌曲:", inputValue)
      e.target.blur()
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      searchSong(e)
    }
  }

  const searchBtn = <div className="cursor-pointer" onClick={searchSong}><SearchInput/></div>

  return <div className={"flex h-full w-full"}>
    <div className={"flex items-center justify-start mr-3"}>
      {/*三个按键*/}
      <span className="cursor-pointer">
        <Left size={30}/>
      </span>
      <span className="cursor-pointer">
        <Right size={30}/>
      </span>
      {refreshRoutes.includes(pathname) &&
        <span className="cursor-pointer"><Refresh size={16} borderSize={30}/></span>}
    </div>

    <div className={"flex items-center justify-start w-72"}>
      {/*搜索框*/}
      {/*<Input placeholder={'搜索音乐'} className={"mr-4"} value={inputValue}
             prefix={isInput ? null : searchBtn}
             suffix={isInput ? searchBtn : null}
             onPressEnter={searchSong}
             onChange={(e) => setInputValue(e.target.value)}
             onFocus={() => {
               setIsInput(true)
             }}
             onBlur={() => inputValue === '' ? setIsInput(false) : null}/>*/}
      <SearchInput/>
      {/*听歌识曲*/}
      <div className="cursor-pointer ml-5">
        <ListenSong size={30}/>
      </div>
    </div>
    <div className={"flex items-center justify-end h-full flex-auto"}>
      <TopBarCustomer/>
    </div>
  </div>


}