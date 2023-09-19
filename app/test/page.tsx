'use client'
import {Howl, Howler} from 'howler';
import React, {useEffect, useRef, useState} from 'react';
import {Button} from "antd";
import {ponyfillGlobal} from "@mui/utils";
import {set} from "immutable";

function Page() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [id, setID] = useState(-1);
    const [animationID, setAnimationID] = useState<number>();
    const [currentTime, setCurrentTime] = useState(0)
    const soundRef = useRef<Howl>(null!);
    const animationRef = useRef<number>(null!);

    useEffect(() => {
        const sound = new Howl({
            src: '/music/TruE - 黄龄,HOYO-MiX.flac',
            volume:0.03,
            onplay: (soundId) => {
                setIsPlaying(true);
                setID(soundId)
                animationRef.current = requestAnimationFrame(updateTime);
            },
            onpause: () => {
                setIsPlaying(false);
                cancelAnimationFrame(animationRef.current);
            },
            onend: () => {
                setIsPlaying(false);
                setCurrentTime(0);
                cancelAnimationFrame(animationRef.current);
            },
            onstop: (soundId)=>{
                setIsPlaying(false)
                setCurrentTime(0)
                cancelAnimationFrame(animationRef.current)
            }
        });
        soundRef.current = sound;
        return () => {
            sound.stop();
        };
    }, []);

    const updateTime = () => {
        setCurrentTime(soundRef.current.seek());
        animationRef.current = requestAnimationFrame(updateTime);
    };

    return (
        <div>
            {timeConvert(currentTime)} -- {timeConvert(soundRef.current?.duration())}
            {isPlaying ? '正在播放' : '已暂停'}
            <Button onClick={() => {
                soundRef.current.play(id===-1?undefined:id)
            }} type={"primary"}>播放</Button>
            <Button onClick={() => {
                soundRef.current.pause(id)
            }} type={"primary"}>暂停</Button>
            <Button onClick={() => {
                soundRef.current.stop(id)
            }} type={"primary"}>停止</Button>
        </div>
    );
}

function timeConvert(time: number): string {
    return Math.floor(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + Math.round(time % 60)
}

export default Page;