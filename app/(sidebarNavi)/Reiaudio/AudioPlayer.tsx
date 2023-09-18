'use client'
import React, {useEffect, useRef, useState} from 'react';
import {Song} from "@/app/(sidebarNavi)/Reiaudio/song";
import {Button, Typography} from "antd";

/*
HAVE_NOTHING	0	没有关于音频/视频是否就绪的信息
HAVE_METADATA	1	音频/视频已初始化
HAVE_CURRENT_DATA	2	数据已经可以播放 (当前位置已经加载) 但没有数据能播放下一帧的内容
HAVE_FUTURE_DATA	3	当前及至少下一帧的数据是可用的 (换句话来说至少有两帧的数据)
HAVE_ENOUGH_DATA	4	可用数据足以开始播放 - 如果网速得到保障 那么视频可以一直播放到底
* */

function AudioPlayer({songList}: { songList: Song[] }) {

    // State
    const [trackIndex, setTrackIndex] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isReady, setIsReady] = useState<boolean>(false)

    const {name, singer, image, localAudioSrc} = songList[trackIndex];

    // Ref
    const audioRef = useRef(new Audio(localAudioSrc));

    audioRef.current.onloadeddata = (e) => {
        let status: number = e.target?.readyState
        if (status >= 2) {
            setIsReady(true)
        }
    }

    // Event
    audioRef.current.ontimeupdate = (e) => {
        setCurrentTime(e.target?.currentTime)
    }

    // effects
    useEffect(() => {
        console.log('是否播放:', isPlaying, ' 播放状态:', isReady)
        if (isReady) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause();
            }
        } else {
            console.log('暂时不具备播放条件')
        }
    }, [isPlaying, isReady])

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(songList[trackIndex].localAudioSrc)
        setIsReady(false)
        console.log('trackIndex effect')
    }, [trackIndex])

    useEffect(() => {
        if (audioRef.current.ended) {
            // todo 切换到下一首
            toNextSong()
        }
    }, [audioRef.current.ended])


    // methods
    /**
     * @description 设置音量
     * @param volume 音量大小 0-100
     */
    const setVolume = (volume: number) => {
        audioRef.current.volume = volume / 100
    }
    const toNextSong = () => {
        if (trackIndex === songList.length - 1) {
            // todo 由播放模式 假定循环
            setTrackIndex(0)
        } else {
            setTrackIndex(index => index + 1)
        }
    }

    setVolume(5)

    return (
        <div>
            <Button type={"primary"} onClick={() => setIsPlaying(state => !state)}>切换</Button>
            <Typography.Text>{currentTime}</Typography.Text>
            <br/>
            <Button type={"primary"} onClick={toNextSong}>下一首</Button>
            <Typography.Text>{isPlaying?'正在播放':'已暂停'}</Typography.Text>
        </div>
    );
}

export default AudioPlayer;