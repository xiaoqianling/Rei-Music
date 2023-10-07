'use client'
import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {
    pause,
    play, playNextSong, playPrevSong,
    selectCurrentTime,
    selectIsPlaying,
    selectPlaylist,
    selectSong,
    setCurrentTime
} from "@/lib/redux/slices";
import {Howl} from "howler";
import {Song} from "@/lib/types/song";
import {MusicBarRight} from "@/components/layout/MusicBar/MusicBarRight";
import {MusicOperation} from "@/components/layout/MusicBar/MusicOperation";
import {MusicInfo} from "@/components/layout/MusicBar/MusicInfo";
import {Slider} from "antd";
import {setIn} from "immutable";


function MusicBar() {
    const dispatch = useDispatch()
    const isPlaying = useSelector(selectIsPlaying)
    const currentTime = useSelector(selectCurrentTime)
    const songInfo: Song | undefined = useSelector(selectSong)
    const playlist = useSelector(selectPlaylist)
    const audioRef = useRef<Howl>(null!)
    const animationRef = useRef<number>(null!)

    useEffect(() => {
        const updateTime = () => {
            dispatch(setCurrentTime(audioRef.current.seek()));
            animationRef.current = requestAnimationFrame(updateTime);
        };
        let sound: Howl
        if (songInfo === undefined) {
            sound = new Howl({src: ''})
        } else {
            let songSrc: string
            if (songInfo.localAudioSrc) {
                songSrc = songInfo.localAudioSrc
            } else {
                songSrc = songInfo.url!
            }
            console.log(songSrc)
            sound = new Howl({
                src: songSrc,
                volume: 0.09,
                onplay: () => {
                    console.log('开始播放')
                    dispatch(play())
                    animationRef.current = requestAnimationFrame(updateTime)
                },
                onpause: () => {
                    dispatch(pause());
                    cancelAnimationFrame(animationRef.current);
                },
                onend: () => {
                    // todo 默认播放下一首
                    dispatch(playNextSong());
                    console.log('结束')
                    dispatch(setCurrentTime(0));
                    cancelAnimationFrame(animationRef.current);
                },
                onload: () => {
                    console.log('加载中')
                }
            })
        }
        audioRef.current = sound
        return () => {
            console.log('effect return')
            sound.stop()
            cancelAnimationFrame(animationRef.current)
        }
    }, [dispatch, songInfo])

    useEffect(() => {
        if (isPlaying && !audioRef.current.playing() && audioRef.current.state() === 'loaded') {
            audioRef.current.play();
        }
    }, [isPlaying])

    const playMusic = () => {
        audioRef.current.play()
    }
    const pauseMusic = () => {
        audioRef.current.pause()
    }
    const nextMusic = () => {
        dispatch(playNextSong())
    }
    const prevMusic = () => {
        dispatch(playPrevSong())
    }
    const sliderChangeCommit = (value: number) => {
        audioRef.current.seek(value)
        if (!isPlaying) {
            audioRef.current.play()
        }

    }
    const sliderChange = (value: number) => {
        dispatch(setCurrentTime(value))

    }

    return (
        <div style={{display: "flex", flexFlow: 'column', height: '100%', width: '100%'}}>
            {/*todo slider显示样式*/}
            {/*<Slider
                sx={{margin: 0, padding: 0}}
                size="small"
                max={audioRef.current?.duration()}
                min={0}
                color={'primary'}
                value={currentTime}
                valueLabelDisplay="on"
                valueLabelFormat={timeConvert(currentTime)}
                onChange={sliderChange}
                onChangeCommitted={sliderChangeCommit}
                disableSwap={true}
                step={1}
            />*/}
            <Slider
                style={{margin: 0}}
                max={audioRef.current?.duration()}
                value={currentTime}
                step={0.1}
                onChange={sliderChange}
                onAfterChange={sliderChangeCommit}
            />
            <div style={{
                width: '100%',
                display: "flex",
                flexFlow: "row",
                flexGrow: 1,
                alignItems: "center",
                padding: '0 35px',
                justifyContent: "space-between"
            }}>
                <div style={{display: "flex", flexFlow: "row", marginLeft: 0, width: '200px'}}>
                    <Image src={'/girl.jpg'} alt={'专辑封面'} width={40} height={40}
                           style={{borderRadius: '5px', marginRight: '10px'}}/>
                    <MusicInfo name={songInfo?.name ?? '未知'} singer={songInfo?.singer ?? '未知歌手'}/>
                </div>
                <MusicOperation isPlaying={isPlaying} onPlay={playMusic} onPause={pauseMusic} onNext={nextMusic}
                                onPrev={prevMusic} disabled={audioRef.current?.state() !== 'loaded'}/>
                <MusicBarRight currentTime={currentTime} duration={audioRef.current?.duration()} playlist={playlist}/>
            </div>
        </div>
    );
}


export default MusicBar;

export function timeConvert(time: number): string {
    const minute = Math.floor(time / 60)
    const second = Math.round(time % 60)
    return (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second
}