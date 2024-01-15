import React from "react";
import Logo from "@/app/ui/logo";
import {TopBar} from "@/app/ui/layout/top/top-bar";
import Audio from "@/app/ui/components/audio/audio"
import NaviItem from "@/app/ui/navi-item";
import {Computer, MusicList, Recommend} from "@/app/ui/components/icons/homeIcons";

const Layout = ({children}: {
  children: React.ReactNode
}) => {
  return (
      <div className="min-h-screen overflow-hidden flex flex-col">
        <header className="h-16 bg-default-500 flex">
          <Logo/>
          <TopBar/>
        </header>
        <div className="flex-1 h-full flex">
          <nav className="min-h-full bg-default-50 w-fit">
            导航
            <NaviItem icon={<Recommend/>} title={'推荐'} url={'/recommend'}/>
            <NaviItem icon={<Computer/>} title={'本地和下载'} url={'/local'}/>
            <NaviItem icon={<MusicList/>} title={'歌曲列表'} url={'/list'}/>
            <NaviItem title={'上传音乐'} url={'/upload'}/>
          </nav>
          <div className="min-h-full w-full">
            <main className="overflow-y-scroll min-h-full p-8 w-full">
              {children}
            </main>
            <footer className="sticky bottom-0 w-full h-14 flex">
              {/*<MusicBar/>*/}
              <Audio/>
            </footer>
          </div>
        </div>
      </div>
  )
}

export default Layout;

