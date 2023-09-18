'use client'
import React, {MutableRefObject, useRef} from 'react';
import {Slider} from "@mui/material";
import {Button, theme, Typography} from "antd";
import Image from "next/image";

function MusicBar() {
    const colorPrimary = theme.useToken().token.colorPrimary
    const audioRef = useRef<HTMLAudioElement>(null)
    console.log('audioRef:',audioRef)

    return (
        <div style={{display: "flex", flexFlow: 'column', height: '100%', width: '100%'}}>
            <Slider
                sx={{margin: 0, padding: 0}}
                size="small"
                max={400}
                min={0}
                color={'primary'}
                defaultValue={0}
                valueLabelDisplay="auto"
            />
            <div style={{
                width: '100%',
                display: "flex",
                flexFlow: "row",
                flexGrow: 1,
                alignItems: "center",
                padding: '0 35px'
            }}>
                <Image src={'/girl.jpg'} alt={'专辑封面'} width={40} height={40}
                       style={{borderRadius: '5px', marginRight: '10px'}}/>
                <audio ref={audioRef}>
                    <source src={'/music/TruE%20-%20黄龄,HOYO-MiX.flac'}/>
                </audio>
                <MusicInfo/>
                {audioRef.current && <MusicOperation audio={audioRef.current}/>}
            </div>
        </div>
    );
}

function MusicInfo() {
    return <div style={{
        display: "flex", flexFlow: "column", width: '200px'
    }}>
        <div>
            <Typography.Text style={{fontSize: '.75rem'}}>歌曲名</Typography.Text>
            <Typography.Text style={{fontSize: '.75rem'}}> - 歌手名</Typography.Text>
        </div>
        <div style={{backgroundColor: 'green'}}>
            操作区
        </div>
    </div>
}

function MusicOperation({audio}: { audio: HTMLAudioElement }) {
    console.log('audio:',audio)
    const toggleStatus = () => {
        console.log('切换audio')
        audio.volume = 0.05;
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }

    }

    return (
        <div>
            {/*    Select 选择播放模式 上一首暂停下一首 Slider音量*/}
            <Button>上一首</Button>
            <Button type={"primary"} onClick={toggleStatus}>切换</Button>
            <Button>上一首</Button>
            <Slider orientation={"vertical"} style={{position: "absolute", bottom: '30px',  height: '100px'}}/>
        </div>
    )
}

export default MusicBar;