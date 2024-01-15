import React from "react";
import Button from "@/app/ui/components/button";
import {Voice} from "@/app/ui/components/icons/homeIcons";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {playNextSong, playPrevSong, selectIsPlaying, selectVolume, setVolume, switchPlay} from "@/lib/redux/slices";

export function AudioOperation() {
  const dispatch = useDispatch()
  const isPlaying = useSelector(selectIsPlaying);
  const volume = useSelector(selectVolume);
  const onSwitch = () => {
    dispatch(switchPlay())
  }
  const onPrev = () => {
    dispatch(playPrevSong())
  }
  const onNext = () => {
    dispatch(playNextSong())
  }

  return (
    <div className={"w-80 flex justify-between items-center select-none"}>
      <Button onClick={onPrev}>上一首</Button>
      <Button primary onClick={onSwitch}>
        {isPlaying ? '暂停' : '播放'}
      </Button>
      <Button onClick={onNext}>下一首</Button>
      {/*音量条*/}
      <Popover>
        <PopoverTrigger>
          <span className="cursor-pointer"><Voice/></span>
        </PopoverTrigger>
        <PopoverContent className="bg-default-50 p-0" bgColor={"lightgreen"} width={8} border={"none"}
                        textAlign={"center"}>
          <PopoverArrow/>
          <PopoverHeader>
            <Slider aria-label='slider-ex-1' value={volume} minH={20} onChange={(value) => dispatch(setVolume(value))}
                    max={1} step={0.01}
                    orientation={"vertical"}>
              <SliderTrack bg={'lightpink'}>
                <SliderFilledTrack/>
              </SliderTrack>
              <SliderThumb boxSize="2"/>
            </Slider>
          </PopoverHeader>
          <PopoverBody className="whitespace-nowrap p-0" paddingX={0}>
            {volume ? volume : '0'}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  )
}