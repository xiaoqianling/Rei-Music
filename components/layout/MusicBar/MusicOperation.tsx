import {Button} from "antd";
import React from "react";

export function MusicOperation({isPlaying, onPause, onPlay, onNext, onPrev, disabled}: {
    isPlaying: boolean,
    onPause: () => void,
    onPlay: () => void,
    onNext: () => void,
    onPrev?: () => void,
    disabled: boolean
}) {
    return (
        <div>
            {/*    Select 选择播放模式 上一首暂停下一首 Slider音量*/}
            <Button>上一首</Button>
            <Button type={"primary"} onClick={() => isPlaying ? onPause() : onPlay()} disabled={disabled}>
                {isPlaying ? '暂停' : '播放'}
            </Button>
            <Button onClick={onNext}>下一首</Button>
        </div>
    )
}