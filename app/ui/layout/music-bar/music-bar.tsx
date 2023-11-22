'use client'
import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {
  cutSongByID,
  fetchMetadata,
  pause,
  play,
  playNextSong,
  playPrevSong,
  selectIsPlaying,
  selectPlaylist,
  selectSong,
} from "@/lib/redux/slices";
import {Howl} from "howler";
import {Song} from "@/lib/types/song";
import MusicBarRight from "@/app/ui/layout/music-bar/right";
import {MusicOperation} from "@/app/ui/layout/music-bar/operation";
import {MusicInfo} from "@/app/ui/layout/music-bar/music-info";
import {Slider, SliderFilledTrack, SliderTrack} from "@chakra-ui/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwind from "@/tailwind.config"


function MusicBar() {
  const dispatch = useDispatch()
  const isPlaying = useSelector(selectIsPlaying)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.15)
  const songInfo: Song | undefined = useSelector(selectSong)
  const playlist = useSelector(selectPlaylist)
  const audioRef = useRef<Howl | undefined>(undefined)
  const animationRef = useRef<number>(null!)
  const [playCondition, setPlayCondition] = useState<boolean>(false);
  const [autoplay, setAutoplay] = useState<boolean>(false)
  const tailwindConfig = resolveConfig(tailwind);

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
        volume: volume,
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
    setAutoplay(true)
  }
  const prevMusic = () => {
    dispatch(playPrevSong())
    setAutoplay(true)
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

  const volumeChange = (volume: number) => {
    setVolume(volume)
    audioRef.current?.volume(volume)
  }

  // 双击切歌
  const handleDrawerDoubleClick = (song: Song) => {
    if (songInfo && songInfo.id !== song.id) {
      console.log('切歌')
      dispatch(cutSongByID(song.id))
      setAutoplay(true)
    }
    if (!isPlaying) {
      console.log('播放')
      audioRef.current?.play()
    }
  }

  //  右键显示操作
  const handleDrawerContextMenu = (e: React.MouseEvent) => {

  }

  return (
    <div className={"flex flex-col h-full w-full bg-default-300"}>
      <Slider className="p-0 h-1" aria-label='slider-ex-1' defaultValue={30} value={currentTime}
              max={audioRef.current?.duration()}
              step={0.1} onChange={sliderChange} onChangeEnd={sliderChangeCommit}>
        <SliderTrack bg={tailwindConfig.theme?.colors?.default['100']}>
          <SliderFilledTrack bg={tailwindConfig.theme?.colors?.default['900']}/>
        </SliderTrack>
        {/*<SliderThumb boxSize="2"/>*/}
      </Slider>
      <div className={"w-full flex flex-grow-[1] items-center justify-between py-0 px-10"}>
        <div className={"flex ml-0 w-60 py-0.5"}>
          <Image className="rounded"
                 src={'/girl.jpg'} alt={'专辑封面'} width={48} height={48}/>
          <MusicInfo name={songInfo?.name ?? '未知'} singer={songInfo?.singer ?? '未知歌手'}/>
        </div>
        <MusicOperation isPlaying={isPlaying} onPlay={playMusic} onPause={pauseMusic} onNext={nextMusic}
                        onPrev={prevMusic} volume={audioRef.current?.volume()}
                        setVolume={volumeChange}/>
        <MusicBarRight currentTime={currentTime} duration={audioRef.current?.duration()} playlist={playlist}
                       currentSongId={songInfo?.id}
                       onDrawerItemContextMenu={handleDrawerContextMenu}
                       onDrawerItemDoubleClick={handleDrawerDoubleClick}/>
      </div>
    </div>
  );
}


export default MusicBar;
