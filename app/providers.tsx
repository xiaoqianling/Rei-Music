'use client'

import React, {useEffect, useState} from "react";
import {Provider} from 'react-redux'
import {reduxStore, useSelector} from "@/lib/redux/store";
import {Button, ConfigProvider, Layout, Menu, MenuProps, Space, Typography} from "antd";
import {usePathname, useRouter} from "next/navigation";
import {TopBar} from "@/components/layout/TopBar/TopBar";
import Title from "antd/es/typography/Title";
import {Icon} from "@/components/icons/homeIcons";
import {defaultTheme, themeMap} from "@/config/themeConfig";
import {items} from "@/config/items";
import MusicBar from "@/components/layout/MusicBar/MusicBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {selectThemeName} from "@/lib/redux/slices/themeSlice";

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

export const Providers = ({children}: { children: React.ReactNode }) => {

    const router = useRouter();
    const pathname = usePathname();
    const [key, setKey] = useState('')
    const themeName = useSelector(selectThemeName)
    const theme = themeMap.get(themeName)?themeMap.get(themeName):defaultTheme;

    const muiTheme = createTheme({
        palette: {
            primary: {
                main: theme?.token?.colorPrimary ? theme.token.colorPrimary : '#1ecd98'
            }
        }
    })

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
        <ThemeProvider theme={muiTheme}>
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
                            <Typography.Title style={{margin: 0}} level={3}>Rei Music</Typography.Title>
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
                                <Title level={2}>
                                    当前页面：{key}
                                </Title>
                                <audio controls>
                                    <source src="/music/TruE - 黄龄,HOYO-MiX.flac" type="audio/flac"/>
                                </audio>
                                <Button href={'/Reiaudio'} type={"primary"}>播放器</Button>
                                <Button href={'/test'} type={"primary"}>测试页面</Button>
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
        </ThemeProvider>
    </ConfigProvider>
}


/*
ReiMusic ©{new Date().getFullYear()} Created by Rei &nbsp;
                            Powered by <Link href={'https://react.docschina.org/'} target={"_blank"}>React</Link>&
                            <Link href={'https://nextjs.org/'} target={"_blank"}>Next</Link>&
                            <Link href={'https://ant-design.antgroup.com/index-cn'} target={"_blank"}>Ant</Link> <br/>
                            Contact With Author: 2838787054@qq.com
* */