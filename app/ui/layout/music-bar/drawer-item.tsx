import React from 'react';
import {Song} from "@/lib/types/song";
import {timeConvert} from "@/app/ui/layout/music-bar/right";

function MusicBarDrawerItem({song, onContextMenu, onDoubleClick, isPlaying}: {
  song: Song,
  onContextMenu: (e: React.MouseEvent) => void,
  onDoubleClick: (song: Song) => void,
  isPlaying?: boolean
}) {
  const handleDoubleClick = () => {
    onDoubleClick(song);
  }
  return (
    <div className="py-2 px-4 w-auto h-15 flex justify-start select-none hover:bg-blue-300 group"
         onContextMenu={onContextMenu}
         onDoubleClick={handleDoubleClick}>
      <div className="w-3/5 flex flex-col justify-center py-2 px-0">
        <div className="">{song.name}</div>
        <div className="text-gray-600 text-xs">{song.singer}</div>
      </div>
      <div className="bg-pink-100 grow flex items-center justify-center">
        <div className="hidden group-hover:flex group-hover:justify-around items-center w-full">
          <span className="cursor-pointer">{isPlaying ? '暂停' : '播放'}</span>
          <span className="cursor-pointer">喜欢</span>
          <span className="cursor-pointer">下载</span>
        </div>
        <div className="block group-hover:hidden">
          {song.length ? timeConvert(song.length) : '未知时长'}
        </div>
      </div>
    </div>

  );
}

export default MusicBarDrawerItem;