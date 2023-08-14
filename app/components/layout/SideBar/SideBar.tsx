'use client'
import React, {useState} from 'react';
import style from './SideBar.module.css'
import SideBarGroup, {SideBarGroupItem} from "@/app/components/layout/SideBar/SideBarGroup";
import {Computer, Like, MusicMenu, MusicOne, OvalLoveTwo, RadarThree, Time, Videocamera} from "@icon-park/react";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {selectIndex, sidebarSlice} from "@/lib/redux/slices";

function SideBar() {

    const dispatch = useDispatch();
    const index = useSelector(selectIndex);
    const handleClick = (index:number[]) => {
        dispatch(sidebarSlice.actions.indexUpdate(index))
    };

    return (<div>
            <div className={style.sideBar}>
                <div className={style.home}>Rei Music</div>
                <SideBarGroup title={"在线音乐"} selectedIndex={index}
                              groupIndex={0} onSwitch={handleClick}>
                    <SideBarGroupItem text={'推荐'} icon={<OvalLoveTwo theme="outline" size="18" fill="white"/>}
                                      onEnable={handleClick}/>
                    <SideBarGroupItem text={'音乐馆'} icon={<MusicOne theme="outline" size="18" fill="white"/>}/>
                    <SideBarGroupItem text={'视频'} icon={<Videocamera theme="outline" size="18" fill="white"/>}/>
                    <SideBarGroupItem text={'雷达'} icon={<RadarThree theme="outline" size="18" fill="white"/>}/>
                </SideBarGroup>
                <SideBarGroup title={"我的音乐"} selectedIndex={index}
                              groupIndex={1} onSwitch={handleClick}>
                    <SideBarGroupItem text={'我喜欢'} icon={<Like theme="outline" size="18" fill="white"/>}/>
                    <SideBarGroupItem text={'本地和下载'} icon={<Computer theme="outline" size="18" fill="white"/>}/>
                    <SideBarGroupItem text={'最近播放'} icon={<Time theme="outline" size="18" fill="white"/>}/>
                    <SideBarGroupItem text={'试听列表'} icon={<MusicMenu theme="outline" size="18" fill="white"/>}/>
                </SideBarGroup>
            </div>
        </div>)
}

export default SideBar;