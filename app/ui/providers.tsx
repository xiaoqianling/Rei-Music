import React from "react";
import Logo from "@/app/ui/logo";
import {TopBar} from "@/app/ui/layout/top/TopBar";
import MusicBar from "@/app/ui/layout/musicBar/musicBar";


const Providers = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <header className="h-16 bg-default-500 flex">
        <Logo/>
        <TopBar/>
      </header>
      <div className="flex-1 h-full flex">
        <nav className="min-h-full bg-default-50 w-52">
          导航
        </nav>
        <div className="min-h-full w-full">
          <main className="overflow-y-scroll min-h-full p-8 w-full">
            {children}
            <p className="absolute right-0">nihao</p>
          </main>
          <footer className="sticky bottom-0 bg-red-200 w-full flex">
            <MusicBar/>
          </footer>
        </div>
      </div>
    </div>
  )

}

export default Providers;

/*
ReiMusic ©{new Date().getFullYear()} Created by Rei &nbsp;
                            Powered by <Link href={'https://react.docschina.org/'} target={"_blank"}>React</Link>&
                            <Link href={'https://nextjs.org/'} target={"_blank"}>Next</Link>&
                            <Link href={'https://ant-design.antgroup.com/index-cn'} target={"_blank"}>Ant</Link> <br/>
                            Contact With Author: 2838787054@qq.com
* */

