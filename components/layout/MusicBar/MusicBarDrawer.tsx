import React, {useEffect, useRef} from 'react';
import {Drawer, List, Typography} from "antd";
import {Song} from "@/lib/types/song";
import MusicBarDrawerItem from "@/components/layout/MusicBar/MusicBarDrawerItem";
import {useSelector} from "@/lib/redux/store";
import {selectIsPlaying} from "@/lib/redux/slices";

function MusicBarDrawer({open, onClose, data, onContextMenu, onDoubleClick, currentSongId}: {
    open: boolean,
    onClose: () => void,
    data: Song[] | undefined,
    onDoubleClick: (song: Song) => void,
    onContextMenu: (e: React.MouseEvent) => void,
    currentSongId?: number
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isPlaying = useSelector(selectIsPlaying)

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            console.log(containerRef.current)
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [open, onClose]);

    // console.log('currentSongId', currentSongId)

    return (
        <Drawer placement={'right'} open={open} onClose={onClose} mask={false} size={"default"}
                drawerStyle={{backgroundColor: 'pink', padding: 0}} panelRef={containerRef}>
            <Typography.Title level={4}>播放列表</Typography.Title>
            <Typography.Text>
                共 {data?.length} 首歌曲
            </Typography.Text>
            <List
                style={{width: '100%'}}
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item) => {
                    return <MusicBarDrawerItem song={item} onDoubleClick={onDoubleClick}
                                               isPlaying={isPlaying && currentSongId === item.id}
                                               onContextMenu={onContextMenu}/>
                }}
            />
        </Drawer>
    );
}

export default MusicBarDrawer;