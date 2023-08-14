import './globals.css'
import style from './page.module.css'
import type {Metadata} from 'next'
import React, {Fragment, StrictMode} from "react";
import {Inter} from 'next/font/google'
import {Providers} from "@/lib/providers";
import SideBar from "@/app/components/layout/SideBar/SideBar";
import TopBar from "@/app/components/layout/TopBar/TopBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh">
        <body className={inter.className}>
        <Providers>
            <div style={{display:"flex"}}>
                <SideBar/>
                <div className={style.vertical}>
                    <TopBar/>
                    {children}
                    {/*    todo 主内容区*/}
                </div>
            </div>
        </Providers>
        </body>
        </html>
    )
}
