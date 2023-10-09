'use client'
import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {
    fetchMetadata,
    pause,
    play, playNextSong, playPrevSong,
    selectIsPlaying,
    selectPlaylist,
    selectSong,
} from "@/lib/redux/slices";
import {Howl} from "howler";
import {Song} from "@/lib/types/song";
import {MusicBarRight, timeConvert} from "@/components/layout/MusicBar/MusicBarRight";
import {MusicOperation} from "@/components/layout/MusicBar/MusicOperation";
import {MusicInfo} from "@/components/layout/MusicBar/MusicInfo";
import {Slider} from "antd";


function MusicBar() {
    const dispatch = useDispatch()
    const isPlaying = useSelector(selectIsPlaying)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const songInfo: Song | undefined = useSelector(selectSong)
    const playlist = useSelector(selectPlaylist)
    const audioRef = useRef<Howl | undefined>(undefined)
    const animationRef = useRef<number>(null!)
    const [playCondition, setPlayCondition] = useState<boolean>(false);
    const [autoplay, setAutoplay] = useState<boolean>(false)

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(audioRef.current ? audioRef.current?.seek() : 0)
            animationRef.current = requestAnimationFrame(updateTime);
        };
        let sound: Howl | undefined = undefined
        if (songInfo !== undefined && playCondition) {
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
                autoplay: autoplay,
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
                    cancelAnimationFrame(animationRef.current);
                }
            })
        }
        audioRef.current = sound
        return () => {
            console.log('effect return')
            sound?.stop()
            cancelAnimationFrame(animationRef.current)
        }
    }, [dispatch, songInfo, playCondition, autoplay])

    useEffect(() => {
        dispatch(fetchMetadata())
    }, [dispatch])

    useEffect(() => {
        if (isPlaying && audioRef.current && !audioRef.current.playing() && audioRef.current.state() === 'loaded') {
            console.log('useEffect-[isPlaying]调用')
            audioRef.current.play();
        }
    }, [isPlaying])

    useEffect(() => {
        const changeCondition = () => {
            setPlayCondition(true);
        }
        if (!playCondition) {
            window.addEventListener('click', changeCondition)
        }
        return () => {
            window.removeEventListener('click', changeCondition)
        }
    }, [playCondition])

    const playMusic = () => {
        audioRef.current?.play()
        setAutoplay(true)
    }
    const pauseMusic = () => {
        audioRef.current?.pause()
    }
    const nextMusic = () => {
        dispatch(playNextSong())
    }
    const prevMusic = () => {
        dispatch(playPrevSong())
    }
    const sliderChangeCommit = (value: number) => {
        audioRef.current?.seek(value)
        if (!isPlaying) {
            audioRef.current?.play()
        }

    }
    const sliderChange = (value: number) => {
        audioRef.current?.seek(value)
    }
    return (
        <div style={{display: "flex", flexFlow: 'column', height: '100%', width: '100%'}}>
            <Slider
                style={{margin: 0}}
                max={audioRef.current?.duration()}
                value={currentTime}
                step={0.1}
                onChange={sliderChange}
                onAfterChange={sliderChangeCommit}
                tooltip={{
                    "formatter": (value) => {
                        return <>{value ? timeConvert(value) : ''}</>
                    }
                }}
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
                                onPrev={prevMusic} disabled={false}/>
                <MusicBarRight currentTime={currentTime} duration={audioRef.current?.duration()} playlist={playlist}/>
            </div>
        </div>
    );
}


export default MusicBar;
