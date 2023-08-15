'use client'
import React from 'react';
import {Left, MonitorTwo, Redo, Right} from "@icon-park/react";
import style from './TopBar.module.css'
import TopBarCustomer from "@/components/layout/TopBar/TopBarCustomer";
import {useSelector} from "@/lib/redux/store";
import {selectIndex} from "@/lib/redux/slices";

function
FlipPage({
             showRefresh
         }: {
    showRefresh?: boolean, children?: React.ReactNode
}) {
    return <div className={style.flipPage}>
        <div>
            <Left theme="outline" size="20" fill="white"/>
            <Right theme="outline" size="20" fill="white"/>
            {showRefresh && <Redo theme="outline" size="18" fill="white"/>}
        </div>
    </div>;
}

function SearchTab() {
    return <div className={style.searchTab}>
        <input type="text" className={style.searchTabInput} placeholder={"搜索音乐"} color={'white'}/>
        <MonitorTwo theme="outline" size="20" fill="white"/>
    </div>;
}

export default function TopBar() {
    const showRefresh : boolean =  useSelector(selectIndex)[0] === 0
    return (
        <div className={style.topBar}>
            <FlipPage showRefresh={showRefresh}/>
            <SearchTab/>
            <TopBarCustomer/>
        </div>
    );
}