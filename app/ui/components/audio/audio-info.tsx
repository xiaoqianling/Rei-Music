import React from 'react';
import Image from "next/image";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentSong} from "@/lib/redux/slices";

function AudioInfo() {
  const song = useSelector(selectCurrentSong)
  return (
    <div className={"flex ml-0 w-60 py-0.5"}>
      <Image className="rounded"
             src={'/girl.jpg'} alt={'专辑封面'} width={48} height={48}/>
      <div className={"flex flex-col w-full"}>
        <div className={"whitespace-nowrap"}>
          <span className={"text-xs overflow-ellipsis"}>{song?.name}</span>
          <span className={"text-xs overflow-ellipsis"}> - {song?.singer}</span>
        </div>
        <div className={"w-full"}>
          操作区
        </div>
      </div>
    </div>
  );
}

export default AudioInfo;