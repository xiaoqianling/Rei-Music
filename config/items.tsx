import {MenuProps} from "antd";
import React from "react";
import {Clock, Computer, Like, Music, MusicList, Radar, Recommend, Video} from "@/components/icons/homeIcons";
import Link from "next/link";

// 侧边栏导航


export const items: MenuProps['items'] = [
    {
        label: '在线音乐',
        type: 'group',
        children: [
            {
                label: (<Link href={'recommend'}>推荐</Link>),
                key: 'recommend',
                icon: <Recommend/>
            },
            {
                label: (<Link href={'music'}>音乐馆</Link>),
                key: 'music',
                icon: <Music/>
            },
            {
                label: (<Link href={'video'}>视频</Link>),
                key: 'video',
                icon: <Video/>
            },
            {
                label: (<Link href={'radar'}>雷达</Link>),
                key: 'radar',
                icon: <Radar/>
            }
        ]
    },
    {
        label: '我的音乐',
        type: 'group',
        children: [
            {
                label: (<Link href={'favorite'}>我喜欢</Link>),
                key: 'favorite',
                icon: <Like/>
            },
            {
                label: (<Link href={'local'}>本地和下载</Link>),
                key: 'local',
                icon: <Computer/>
            },
            {
                label: (<Link href={'recent'}>最近播放</Link>),
                key: 'recent',
                icon: <Clock/>
            },
            {
                label: (<Link href={'audition'}>试听列表</Link>),
                key: 'audition',
                icon: <MusicList/>
            }
        ]
    },
    {
        type: 'divider'
    },
    {
        label: (<Link href={'upload'}>上传音乐</Link>),
        key: 'upload',
    },
    {
        label: 'text1',
        key: 'text1',
    },
    {
        label: 'text2',
        key: 'text2'
    }, {
        label: 'text3',
        key: 'text3'
    }
    , {
        label: 'text4',
        key: 'text4'
    }, {
        label: 'text5',
        key: 'text5'
    }, {
        label: 'text6',
        key: 'text6'
    }, {
        label: 'text7',
        key: 'text7'
    }
]


