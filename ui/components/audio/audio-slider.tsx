import React from 'react';
import {Slider, SliderFilledTrack, SliderTrack} from "@chakra-ui/react";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {play, selectCurrentTheme, selectCurrentTime, setCurrentTime} from "@/lib/redux/slices";

function AudioSlider({audio}: { audio: Howl | undefined }) {
  const dispatch = useDispatch()
  const currentTime = useSelector(selectCurrentTime)
  const currentTheme = useSelector(selectCurrentTheme)
  const sliderChangeCommit = () => {
    // audioRef.current?.seek(value)
    audio?.mute(false)
    dispatch(play())
  }
  const sliderChange = (value: number) => {
    audio?.mute(true)
    audio?.pause()
    audio?.seek(value)
    dispatch(setCurrentTime(value))
  }

  return (
    <Slider className="p-0 h-1" aria-label='slider-ex-1' defaultValue={30} value={currentTime}
            max={audio?.duration()}
            step={0.1} onChange={sliderChange} onChangeEnd={sliderChangeCommit}>
      <SliderTrack bg={currentTheme.config.footbg}>
        <SliderFilledTrack bg={currentTheme.config.primary}/>
      </SliderTrack>
      {/*<SliderThumb boxSize="2"/>*/}
    </Slider>
  );
}

export default AudioSlider;