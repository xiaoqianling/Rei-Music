'use client'
import React from 'react';
import style from './SideBar.module.css'
import SideBarGroup, {SideBarGroupItem} from "@/components/layout/SideBar/SideBarGroup";
import {Computer, Like, MusicMenu, MusicOne, OvalLoveTwo, RadarThree, Time, Videocamera} from "@icon-park/react";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {selectIndex, sidebarSlice} from "@/lib/redux/slices";
import {useRouter, usePathname} from "next/navigation";

function SideBar() {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const index = useSelector(selectIndex);
    const switchIndex = (index: number[]) => {
        dispatch(sidebarSlice.actions.indexUpdate(index))
    };
    const handleBackHome = () => {
        if (pathname !== '/') {
            console.log('返回主页')
            router.push('/')
            dispatch(sidebarSlice.actions.indexUpdate([-1,-1]))
        }
    }

    return (<div>
        <div className={style.sideBar}>
            <div className={style.home}><span  onClick={handleBackHome}>Rei Music</span></div>
            <SideBarGroup title={"在线音乐"} selectedIndex={index}
                          groupIndex={0} onSwitch={switchIndex}>
                <SideBarGroupItem text={'推荐'} icon={<OvalLoveTwo theme="outline" size="18" fill="white"/>}
                                  targetRoute='recommend'/>
                <SideBarGroupItem text={'音乐馆'} icon={<MusicOne theme="outline" size="18" fill="white"/>}
                                  targetRoute='music'/>
                <SideBarGroupItem text={'视频'} icon={<Videocamera theme="outline" size="18" fill="white"/>}
                                  targetRoute='vedio'/>
                <SideBarGroupItem text={'雷达'} icon={<RadarThree theme="outline" size="18" fill="white"/>}
                                  targetRoute='radar'/>
            </SideBarGroup>
            <SideBarGroup title={"我的音乐"} selectedIndex={index}
                          groupIndex={1} onSwitch={switchIndex}>
                <SideBarGroupItem text={'我喜欢'} icon={<Like theme="outline" size="18" fill="white"/>}
                                  targetRoute='favorite'/>
                <SideBarGroupItem text={'本地和下载'} icon={<Computer theme="outline" size="18" fill="white"/>}
                                  targetRoute='local'/>
                <SideBarGroupItem text={'最近播放'} icon={<Time theme="outline" size="18" fill="white"/>}
                                  targetRoute='recent'/>
                <SideBarGroupItem text={'试听列表'} icon={<MusicMenu theme="outline" size="18" fill="white"/>}
                                  targetRoute='audition'/>
            </SideBarGroup>
        </div>
    </div>)
}

export default SideBar;