import React from "react";
import Logo from "@/app/ui/logo";
import {TopBar} from "@/app/ui/layout/top/top-bar";
import Audio from "@/app/ui/components/audio/audio"
import NaviItem from "@/app/ui/navi-item";
import {Computer, MusicList, Recommend} from "@/app/ui/components/icons/homeIcons";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";

const Layout = ({children}: {
  children: React.ReactNode
}) => {
  const currentTheme = useSelector(selectCurrentTheme)

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <div className="overflow-hidden flex flex-row flex-1">
        <nav className="w-64 flex flex-col items-start"
             style={{backgroundColor: currentTheme.config.sidebg}}>
          <Logo/>
          <span className="ml-3">导航</span>
          <NaviItem icon={<Recommend/>} title={'推荐'} url={'/recommend'}/>
          <NaviItem icon={<Computer/>} title={'本地和下载'} url={'/local'}/>
          <NaviItem icon={<MusicList/>} title={'歌曲列表'} url={'/list'}/>
          <NaviItem title={'上传音乐'} url={'/upload'}/>
        </nav>
        <main className="min-h-full w-full">
          {/*bg-default-500*/}
          <header className="h-16 flex"
                  style={{backgroundColor: currentTheme.config.topbg}}>
            <TopBar/>
          </header>
          <main className="overflow-y-scroll min-h-full p-8 w-full"
                style={{backgroundColor: currentTheme.config.mainbg}}>
            {children}
          </main>
        </main>
      </div>
      <footer className="bottom-0 w-full h-14 flex" style={{backgroundColor: currentTheme.config.footbg}}>
        <Audio/>
      </footer>
    </div>
  )
}

export default Layout;

