import React from 'react';
import {Button, Dropdown, MenuProps, Space, Typography} from "antd";
import Image from "next/image";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {themeChangeByValue} from "@/lib/redux/slices/themeSlice";
import {DownOutlined} from "@ant-design/icons";
function TopBarCustomer() {

    return (
        <>
            <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
            <Typography.Text>千灵</Typography.Text>
            <span>打钱</span>
            <span>↓</span>
            <ThemeSelector/>
            <Typography.Text>更多功能</Typography.Text>
        </>
    );
}

export default TopBarCustomer;


function ThemeSelector() {
    const dispatch = useDispatch()
    const themeName = useSelector(state => state.theme.themeName)

    const items: MenuProps["items"] = [{
        label: '默认主题',
        key: 'default',

    }, {
        label: '桃花主题',
        key: 'sakura'
    }]

    const handleChangeTheme: MenuProps['onClick'] = (info) => {
        dispatch(themeChangeByValue(info.key))
    }

    const menuProps = {
        items: items,
        onClick: handleChangeTheme
    };
    return (
        <Dropdown menu={menuProps}>
            <Button>
                <Space>
                    {themeName}
                    <DownOutlined/>
                </Space>
            </Button>
        </Dropdown>
    );
}
