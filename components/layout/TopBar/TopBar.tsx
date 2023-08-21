'use client'
import React from 'react';
import style from './TopBar.module.css'
import TopBarCustomer from "@/components/layout/TopBar/TopBarCustomer";
import {useSelector} from "@/lib/redux/store";
import {selectIndex} from "@/lib/redux/slices";
import {Left, ListenSong, Refresh, Right} from "@/components/icons/homeIcons";

function
FlipPage({
             showRefresh
         }: {
    showRefresh?: boolean, children?: React.ReactNode
}) {
    return <div className={style.flipPage}>
        <Left size={30} color='white'/>
        <Right size={30} color='white'/>
        {showRefresh && <Refresh size={16} color='white' borderSize={30}/>}
    </div>;
}

function SearchTab() {
    return <div className={style.searchTab}>
        <input type="text" className={style.searchTabInput} placeholder={"搜索音乐"} color={'white'}/>
        <ListenSong size={30}/>
    </div>;
}

export default function TopBar() {
    const showRefresh: boolean = useSelector(selectIndex)[0] === 0
    return (
        <div className={style.topBar}>
            <FlipPage showRefresh={showRefresh}/>
            <SearchTab/>
            <TopBarCustomer/>
        </div>
    );
}