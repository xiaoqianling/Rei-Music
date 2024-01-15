import React from "react";
import {MusicList} from "@/app/ui/components/icons/homeIcons";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTime, selectLength, selectPlaylist} from "@/lib/redux/slices";


const AudioProgress = () => {
  const currentTime = useSelector(selectCurrentTime)
  const duration = useSelector(selectLength)
  const playlist = useSelector(selectPlaylist)

  return (
    <div className={"w-40 flex justify-around"}>
      <span>
        {currentTime ? timeConvert(currentTime) : ''} -- {duration ? timeConvert(duration) : ''}
      </span>
      {/*todo 抽屉*/}
      <span className={"flex cursor-pointer"}>
            <MusicList/>
        {playlist?.length ?? 0}
      </span>
      {/*<MusicBarDrawer open={openDrawer} onClose={closeDrawer} data={playlist} currentSongId={currentSongId}
                    onContextMenu={onDrawerItemContextMenu}
                    onDoubleClick={onDrawerItemDoubleClick}/>*/}
    </div>
  )
}

export default AudioProgress

export function timeConvert(time: number): string {
  let minute = Math.floor(time / 60)
  const second = Math.round(time) % 60
  if (second === 0 && Math.floor(time) % 60 >= 1)
    minute++
  return (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second
}