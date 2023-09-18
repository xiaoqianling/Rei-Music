'use client'
import {Howl, Howler} from 'howler';
import React, {useRef, useState} from 'react';
import {Button} from "antd";

function Page() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [id, setID] = useState(-1);
    const [sound, setSound] = useState(new Howl({
        src: '/music/TruE - 黄龄,HOYO-MiX.flac', html5: true, volume: 0.03,
        onplay: (soundId) => {
            console.log('开始播放')
            setIsPlaying(true)
            if (id !== -1) {
                console.log('移除:', id)
            }
            console.log('添加:', soundId)
            setID(soundId)
        },
        onload: (soundId) => {
            console.log('加载完成', soundId)
        },
        onpause: (soundId) => {
            console.log(soundId, '已暂停')
        },
        onstop: (soundId) => {
            console.log(soundId, '已停止')
        }
    }))
    console.log('duration:', sound.duration(id))

    return (
        <div>
            {isPlaying ? '正在播放' : '已暂停'}
            <Button onClick={() => {
                sound.play()
            }} type={"primary"}>播放</Button>
            <Button onClick={() => {
                sound.pause(id)
            }} type={"primary"}>暂停</Button>
            <Button onClick={() => {
                sound.stop(id)
            }} type={"primary"}>停止</Button>
        </div>
    );
}

export default Page;