'use client'
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "@/lib/redux/store";
import {
  fetchMetadata,
  pause,
  play,
  playNextSong,
  selectCurrentSong,
  selectIsPlaying,
  selectVolume,
  setCurrentTime,
  setSongDuration,
} from "@/lib/redux/slices";
import {Howl} from "howler";
import {Song} from "@/lib/types/songs";
import {serverUrl} from "@/lib/api/music-api";
import AudioSlider from "@/ui/components/audio/audio-slider";
import AudioInfo from "@/ui/components/audio/audio-info";
import {AudioOperation} from "@/ui/components/audio/audio-operate";
import AudioProgress from "@/ui/components/audio/audio-progress";

function Audio() {
  const dispatch = useDispatch()
  const isPlaying = useSelector(selectIsPlaying)
  const volume = useSelector(selectVolume)
  // 通过songInfo切歌
  const songInfo: Song | undefined = useSelector(selectCurrentSong)
  const audioRef = useRef<Howl | undefined>(undefined)
  const animationRef = useRef<number>(null!)
  // 由于浏览器限制，在用户交互后才具有播放条件
  const [playCondition, setPlayCondition] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      dispatch(setCurrentTime(audioRef.current?.seek() ?? 0))
      animationRef.current = requestAnimationFrame(updateTime);
    };
    let sound: Howl | undefined = undefined
    if (songInfo !== undefined && playCondition) {
      // 满足条件 开始播放
      let songSrc: string = serverUrl+'/song/id/'+songInfo.id
      sound = new Howl({
        src: songSrc,
        // 通过音频流播放
        format: ['ogg', 'mp3'],
        onplay: () => {
          dispatch(play())
          animationRef.current = requestAnimationFrame(updateTime)
        },
        onpause: () => {
          dispatch(pause());
          cancelAnimationFrame(animationRef.current);
        },
        onend: () => {
          // 默认播放下一首
          dispatch(playNextSong());
          cancelAnimationFrame(animationRef.current);
        },
        onload: () => {
          // 歌曲加载完成后将歌曲信息存入redux
          dispatch(setSongDuration(sound?.duration() ?? 0))
          // 若直接点击播放按钮 则开始播放
          sound && audioInit(sound)
        }
      })
    }
    audioRef.current = sound
    return () => {
      audioRef.current?.unload()
      cancelAnimationFrame(animationRef.current)
    }
  }, [dispatch, songInfo, playCondition])

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
  }, [isPlaying])

  useEffect(() => {
    audioRef.current && audioRef.current?.volume(volume)
  }, [volume])

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

  const audioInit = (audio: Howl) => {
    audio.volume(volume)
    isPlaying && audio.play()
  }

  //  右键显示操作
  return (
    // bg-default-300
    <div className={"flex flex-col h-full w-full"}>
      <AudioSlider audio={audioRef.current}/>
      <div className={"w-full flex flex-grow-[1] items-center justify-between py-0 px-10"}>
        <div className={"flex ml-0 w-60 py-0.5"}>
          <AudioInfo/>
        </div>
        <AudioOperation/>
        <AudioProgress/>
        {/*<AudioDrawer/>*/}
      </div>
    </div>
  );
}


export default Audio;
