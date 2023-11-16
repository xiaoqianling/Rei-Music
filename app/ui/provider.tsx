'use client'
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {Layout, Menu, MenuProps} from "antd";
import {TopBar} from "@/app/ui/layout/top/TopBar";
import {items} from "@/config/items";
import MusicBar from "@/app/ui/layout/musicBar/musicBar";
import Logo from "@/app/ui/logo";

const {Header, Content, Footer, Sider} = Layout;

const Providers = ({children}: { children: React.ReactNode }) => {

  const router = useRouter();
  const pathname = usePathname();
  const [key, setKey] = useState('')

  useEffect(() => {
    setKey(pathname.substring(1))
  }, [pathname])

  const handleBackHome = () => {
    if (pathname !== '/') {
      console.log('返回主页')
      router.push('/')
      setKey('')
    }
  }
  const switchItem: MenuProps['onClick'] = (e) => {
    setKey(e.key)
  }
  return (
    <Layout className={`max-h-screen overflow-hidden`}>
      <Header className={"p-0"}>
        <div className={"flex items-center flex-row w-full"}>
          {/*<Space className={"w-64 font-bold text-xl cursor-pointer"} align={"center"}
                 direction={"horizontal"} onClick={handleBackHome}>
            <Icon size={40}/>
            <span className="md:text-2xl">Rei Music</span>
          </Space>*/}
          <Logo/>
          <TopBar/>
        </div>
      </Header>
      <Layout className={"h-screen"}>
        <Sider className={"overflow-y-scroll"}>
          <Menu className={'py-0 px-3 min-h-full'} selectedKeys={[key]} mode="inline" onClick={switchItem}
                items={items}/>
        </Sider>
        <Layout>
          <Content className={"overflow-y-scroll h-full"}>
            <div className={"h-full p-8"}>
              {children}
            </div>
          </Content>
          <Footer className={"h-20 p-0"}>
            <MusicBar/>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
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