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

export function MusicOperation({isPlaying, onPause, onPlay, onNext, onPrev, volume, setVolume}: {
  isPlaying: boolean,
  onPause: () => void,
  onPlay: () => void,
  onNext: () => void,
  onPrev?: () => void,
  volume?:number,
  setVolume?:(volume:number)=>void
}) {
  return (
    <div className={"w-80 flex justify-between items-center select-none"}>
      <Button onClick={onPrev}>上一首</Button>
      <Button primary onClick={() => isPlaying ? onPause() : onPlay()}>
        {isPlaying ? '暂停' : '播放'}
      </Button>
      <Button onClick={onNext}>下一首</Button>

      <Popover>
        <PopoverTrigger>
          <span className="cursor-pointer"><Voice/></span>
        </PopoverTrigger>
        <PopoverContent className="bg-default-50 p-0" bgColor={"lightgreen"} width={8} border={"none"} textAlign={"center"}>
          <PopoverArrow/>
          <PopoverHeader>
            <Slider aria-label='slider-ex-1' value={volume} minH={20} onChange={setVolume} max={1} step={0.01}
                    orientation={"vertical"}>
              <SliderTrack bg={'lightpink'}>
                <SliderFilledTrack/>
              </SliderTrack>
              <SliderThumb boxSize="2"/>
            </Slider>
          </PopoverHeader>
          <PopoverBody className="whitespace-nowrap p-0" paddingX={0}>
            {volume?volume:'0'}
          </PopoverBody>
        </PopoverContent>
      </Popover>

    </div>
  )
}