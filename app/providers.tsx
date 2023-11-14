'use client'

import React, {useEffect, useState} from "react";
import {Provider} from 'react-redux'
import {reduxStore, useSelector} from "@/lib/redux/store";
import {ConfigProvider, Layout, Menu, MenuProps, Space, Typography} from "antd";
import {usePathname, useRouter} from "next/navigation";
import {TopBar} from "@/components/layout/TopBar/TopBar";
import Title from "antd/es/typography/Title";
import {Icon} from "@/components/icons/homeIcons";
import {defaultTheme, themeMap} from "@/config/themeConfig";
import {items} from "@/config/items";
import {selectThemeValue} from "@/lib/redux/slices/themeSlice";
import MusicBar from "@/components/layout/MusicBar/MusicBar";
import styled from "styled-components";

const {Header, Content, Footer, Sider} = Layout;

export function ReduxProvider({children}: { children: React.ReactNode }) {
    return (
        <Provider store={reduxStore}>
            <Providers>
                {children}
            </Providers>
        </Provider>
    )
}

const IconSpan = styled.span`

  @media (max-width: 767px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Providers = ({children}: { children: React.ReactNode }) => {

    const router = useRouter();
    const pathname = usePathname();
    const [key, setKey] = useState('')
    const themeValue = useSelector(selectThemeValue)
    const theme = themeMap.get(themeValue) ? themeMap.get(themeValue) : defaultTheme;

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
    return <ConfigProvider theme={theme}>
        <Layout style={{height: '100vh', overflow: "hidden"}}>
            <Header style={{padding: 0}}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "row",
                    width: '100%',
                    height: '8vh'
                }}>
                    <Space className={'logo'} align={"center"}
                           direction={"horizontal"} onClick={handleBackHome}>
                        <Icon size={40}/>
                        <IconSpan>Rei Music</IconSpan>
                    </Space>
                    <TopBar/>
                </div>
            </Header>
            <Layout style={{height: '100%'}}>
                <Sider className={'sider'}>
                    <Menu className={'menu'} selectedKeys={[key]} mode="inline" onClick={switchItem}
                          items={items}/>
                </Sider>
                <Layout>
                    <Content style={{height: '100%', overflowY: "scroll"}}>
                        <div style={{padding: 24, height: '100%'}}>
                            {children}
                        </div>
                    </Content>
                    <Footer style={{
                        height: '8vh',
                        padding: 0
                    }}>
                        <MusicBar/>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    </ConfigProvider>
}


/*
ReiMusic ©{new Date().getFullYear()} Created by Rei &nbsp;
                            Powered by <Link href={'https://react.docschina.org/'} target={"_blank"}>React</Link>&
                            <Link href={'https://nextjs.org/'} target={"_blank"}>Next</Link>&
                            <Link href={'https://ant-design.antgroup.com/index-cn'} target={"_blank"}>Ant</Link> <br/>
                            Contact With Author: 2838787054@qq.com
* */