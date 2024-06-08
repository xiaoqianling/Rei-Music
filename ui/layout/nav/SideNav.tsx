'use client'
import * as React from 'react';
import NaviItem, {LinkWrapHover} from "@/ui/navi-item";
import {useSelector} from "@/lib/redux/store";
import {selectCreatePlaylist, selectCurrentTheme, selectIsLogin} from "@/lib/redux/slices";
import {Divider} from "@chakra-ui/react";
import Link from "next/link";
import {MusicList, Recommend} from "@/ui/components/icons/homeIcons";
import CreatePlaylistModal from "@/ui/layout/nav/CreatePlaylistModal";


export function SideNav() {
  const isLogin = useSelector(selectIsLogin)
  const createdPlaylist = useSelector(selectCreatePlaylist)
  const currentTheme = useSelector(selectCurrentTheme)

  return (
    <div className="px-6">
      <div>
        <span className="ml-3 text-sm">导航</span>
        <NaviItem icon={<Recommend/>} title={'推荐'} url={'/recommend'}/>
        <NaviItem icon={<MusicList/>} title={'当前歌曲列表'} url={'/list'}/>
        <NaviItem title={'上传音乐'} url={'/upload'}/>
      </div>
      <Divider colorScheme='blackAlpha'/>
      {!isLogin ? <span className="ml-7">登陆后可以创建歌单!</span> :
        <div>
          <span className="ml-3 text-sm">我的音乐</span>
          <LinkWrapHover color={currentTheme.config.hover}>
            <Link className="flex items-center "
                  href={'/favorite'}>
              <span>♥</span>
              <span>喜欢</span>
            </Link>
          </LinkWrapHover>
          {createdPlaylist.map(p => <NaviItem key={p.playlistId} title={p.playlistName}
                                              url={'/playlist/' + p.playlistId}/>)}
          <CreatePlaylistModal/>
        </div>}
    </div>
  );
}