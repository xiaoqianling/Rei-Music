import React from "react";
import Button from "@/app/ui/components/button";

export function MusicOperation({isPlaying, onPause, onPlay, onNext, onPrev, disabled}: {
  isPlaying: boolean,
  onPause: () => void,
  onPlay: () => void,
  onNext: () => void,
  onPrev?: () => void,
  disabled: boolean
}) {
  return (
    <div className={"w-72 flex  justify-between"}>
      <Button onClick={onPrev}>上一首</Button>
      <Button primary onClick={() => isPlaying ? onPause() : onPlay()}>
        {isPlaying ? '暂停' : '播放'}
      </Button>
      <Button onClick={onNext}>下一首</Button>
    </div>
  )
}