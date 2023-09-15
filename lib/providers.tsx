'use client'

import React, {useState} from "react";
import {Provider} from 'react-redux'
import {reduxStore} from "@/lib/redux/store";
import {Button, ConfigProvider, Layout, Menu, MenuProps, Space, Typography} from "antd";
import {usePathname, useRouter} from "next/navigation";
import {NewTopBar} from "@/components/layout/TopBar/TopBar";
import Title from "antd/es/typography/Title";
import {Icon} from "@/components/icons/homeIcons";
import Link from "next/link";
import {defaultTheme, sakuraTheme} from "@/config/themeConfig";
import {items} from "@/config/items";
import {ThemeConfig} from "antd/es/config-provider/context";

const {Header, Content, Footer, Sider} = Layout;

export const Providers = ({children}: { children: React.ReactNode }) => {

    const router = useRouter();
    const pathname = usePathname();
    const [key, setKey] = useState('')
    const [theme, setTheme] = useState<ThemeConfig>(defaultTheme)

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
    return <Provider store={reduxStore}>
        <ConfigProvider theme={theme}>
            <Layout style={{height: '100vh', overflow: "hidden"}}>
                <Header style={{padding: 0}}>
                    <div style={{display: "flex", alignItems: "center", flexFlow: "row", width: '100%', height: '8vh'}}>
                        <Space className={'logo'} align={"center"}
                               direction={"horizontal"} onClick={handleBackHome}>
                            <Icon size={40}/>
                            <Typography.Title style={{margin: 0}} level={3}>Rei Music</Typography.Title>
                        </Space>
                        <NewTopBar/>
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
                                {children}
                            </div>
                        </Content>
                        <Footer style={{
                            textAlign: 'center',
                            height: '6vh',
                            padding: '0 0',
                            fontSize: '1rem'
                        }}>
                            ReiMusic ©{new Date().getFullYear()} Created by Rei &nbsp;
                            Powered by <Link href={'https://react.docschina.org/'} target={"_blank"}>React</Link>&
                            <Link href={'https://nextjs.org/'} target={"_blank"}>Next</Link>&
                            <Link href={'https://ant-design.antgroup.com/index-cn'} target={"_blank"}>Ant</Link> <br/>
                            Contact With Author: 2838787054@qq.com
                        </Footer>
                    </Layout>

                </Layout>

            </Layout>
        </ConfigProvider>

    </Provider>
}