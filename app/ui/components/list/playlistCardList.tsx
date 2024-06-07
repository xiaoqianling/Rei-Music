import React from 'react';
import {Playlist} from "@/lib/types/songs";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {PlayMusic} from "@/app/ui/components/icons/homeIcons";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";


function PlaylistCardList({playlist}:{playlist:Playlist[]}) {
  return (
    <div className={"grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 py-2 gap-y-4 gap-x-4 sm:grid-cols-2"}>
      {playlist.map(p => <Card description={p.playlistName} playlistId={p.playlistId} key={p.playlistId}/>)}
    </div>
  );
}

type Props = {
  url?: string,
  description: string,
  other?: string,
  playlistId: number
};
export const Card = ({url, description, playlistId}: Props) => {
  const router = useRouter()
  const currentTheme = useSelector(selectCurrentTheme)

  const handleClick = () => {
    console.log('click')
    router.push('/playlist/'+playlistId)
  }

  return (
    <div onClick={handleClick}>
      <div className="group w-44 h-44 flex justify-center items-center cursor-pointer relative bottom-0 rounded-xl overflow-hidden p-0
              transition-[bottom] ease-in-out duration-200 hover:bottom-3 bg-red-400">
        {/*todo  添加歌单封面*/}
        <Image src={url?url:'https://img9.vilipix.com/picture/pages/regular/2022/08/31/14/102210467_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000'} alt={description} width={180} height={180}/>
        {/*隐藏的播放键*/}
        <div
          className={"absolute opacity-0 transition-[opacity] ease-in duration-150 bg-transparent group-hover:opacity-80"}>
          <PlayMusic size={40} color={currentTheme.config.primary}/>
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default PlaylistCardList;