import React, {useState} from "react";
import {MusicList} from "@/components/icons/homeIcons";
import {Song} from "@/lib/types/song";
import {Drawer} from "antd";

export function MusicBarRight({currentTime, duration, playlist}: {
    currentTime?: number,
    duration?: number,
    playlist: Song[] | undefined
}) {
    const [openDrawer, setOpenDrawer] = useState(false)

    const showDrawer = () => {
        setOpenDrawer(true)
    }
    const closeDrawer = () => {
        setOpenDrawer(false)
    }

    return <div style={{width: '200px', display: "flex", flexFlow: "row", justifyContent: "space-around"}}>
        <span>
        {currentTime ? timeConvert(currentTime) : ''} -- {duration ? timeConvert(duration) : ''}
        </span>
        <span style={{display: "flex", flexFlow: "row"}} onClick={showDrawer}>
            <MusicList/>
            {playlist?.length ?? 0}
        </span>
        <Drawer placement={'right'} open={openDrawer} onClose={closeDrawer} mask={false} maskClosable>
            列表
        </Drawer>
    </div>;
}

export function timeConvert(time: number): string {
    let minute = Math.floor(time / 60)
    const second = Math.round(time) % 60
    if (second === 0 && time > 59)
        minute++
    return (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second
}