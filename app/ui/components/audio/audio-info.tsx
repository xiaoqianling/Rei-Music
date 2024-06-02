import React from 'react';
import Image from "next/image";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentSong} from "@/lib/redux/slices";

function AudioInfo() {
  const song = useSelector(selectCurrentSong)
  return (
    <div className={"flex ml-0 w-60 py-0.5 flex-row items-center"}>
      <Image className="rounded"
             src={'/girl.jpg'} alt={'专辑封面'} width={48} height={48}/>
      <div className="text-sm pl-2 font-bold text-nowrap w-24">
          <span className={"overflow-ellipsis w-10"}>{song?.name}</span>
          <span className={"overflow-ellipsis overflow-hidden whitespace-nowrap break-all"}> - {song?.singer}</span>
      </div>
      <div>
        ♥
      </div>
    </div>
  );
}

export default AudioInfo;