'use client'
import React, {useEffect, useState} from "react";
import {MusicList} from "@/components/icons/homeIcons";
import {Song} from "@/lib/types/song";
import MusicBarDrawer from "@/components/layout/MusicBar/MusicBarDrawer";

interface Props {
    currentTime?: number,
    duration?: number,
    playlist: Song[] | undefined,
    onDrawerItemDoubleClick: (song: Song) => void,
    onDrawerItemContextMenu: (e: React.MouseEvent) => void,
    currentSongId?: number
}

const MusicBarRight: React.FC<Props> = ({
                                            currentTime,
                                            duration,
                                            playlist,
                                            onDrawerItemContextMenu,
                                            onDrawerItemDoubleClick,
                                            currentSongId
                                        }) => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const showDrawer = () => {
        setOpenDrawer(true)
    }
    const closeDrawer = () => {
        setOpenDrawer(false)
        console.log('closed')
    }

    useEffect(() => {
        console.log("rendering")
    }, [playlist])

    return <div style={{width: '200px', display: "flex", flexFlow: "row", justifyContent: "space-around"}}>
        <span>
        {currentTime ? timeConvert(currentTime) : ''} -- {duration ? timeConvert(duration) : ''}
        </span>
        <span style={{display: "flex", flexFlow: "row", cursor: "pointer"}} onClick={showDrawer}>
            <MusicList/>
            {playlist?.length ?? 0}
        </span>
        <MusicBarDrawer open={openDrawer} onClose={closeDrawer} data={playlist} currentSongId={currentSongId}
                        onContextMenu={onDrawerItemContextMenu}
                        onDoubleClick={onDrawerItemDoubleClick}/>
    </div>;
}

export default MusicBarRight

export function timeConvert(time: number): string {
    let minute = Math.floor(time / 60)
    const second = Math.round(time) % 60
    if (second === 0 && Math.floor(time) % 60 >= 1)
        minute++
    return (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second
}