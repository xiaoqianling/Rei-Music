'use client'
import React from "react";
import Logo from "@/ui/logo";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import {TopBar} from "@/ui/layout/top/top-bar";
import {SideNav} from "@/ui/layout/nav/SideNav";
import Audio from "@/ui/components/audio/audio";

const Layout = ({children}: {
  children: React.ReactNode
}) => {
  const currentTheme = useSelector(selectCurrentTheme)

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header className="h-16 flex"
              style={{backgroundColor: currentTheme.config.topbg}}>
        <Logo/>
        <TopBar/>
      </header>
      <div className="overflow-hidden flex flex-row flex-1">
        <nav
          className="w-fit flex flex-col items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-x-hidden"
          style={{backgroundColor: currentTheme.config.sidebg}}>
          <SideNav/>
        </nav>
        <main className="overflow-y-auto min-h-full p-6 w-full"
              style={{backgroundColor: currentTheme.config.mainbg}}>
          {/* 主页 */}
          {children}
        </main>
      </div>
      <footer className="h-16 flex items-center justify-center"
              style={{backgroundColor: currentTheme.config.footbg}}>
        <Audio/>
      </footer>
    </div>
  )
}

export default Layout;

