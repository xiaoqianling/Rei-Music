'use client'
import React from 'react';
import {Left, ListenSong, Refresh, Right} from "@/app/ui/components/icons/homeIcons";
import {usePathname} from "next/navigation";
import {refreshRoutes} from "@/config/config";
import TopBarCustomer from "@/app/ui/layout/top/customer";
import SearchInput from "@/app/ui/layout/top/search-input";

export function TopBar() {
  const pathname = usePathname().substring(1);
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