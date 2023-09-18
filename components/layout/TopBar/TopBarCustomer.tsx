import React, {useRef, useState} from 'react';
import {Avatar, Button, Menu, MenuProps, Select, Switch, Typography} from "antd";
import Image from "next/image";
import useTheme from "antd/es/config-provider/hooks/useTheme";
import {SettingOutlined} from "@ant-design/icons";
import {themeItems} from "@/config/themeConfig";
import {useDispatch} from "@/lib/redux/store";
import {themeSlice} from "@/lib/redux/slices/themeSlice";

function TopBarCustomer() {

    return (
        <>
            <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
            <Typography.Text>千灵</Typography.Text>
            <span>打钱</span>
            <span>↓</span>
            <App/>
            <Typography.Text>更多功能</Typography.Text>
        </>
    );
}

export default TopBarCustomer;


function App() {
    const dispatch = useDispatch()
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        dispatch(themeSlice.actions.indexUpdate(value))
    };


    return (
        <Select
            defaultValue="主题设置"
            style={{width: 120}}
            onChange={handleChange}
            options={themeItems}
        />
    );
}
