import React, {useState} from 'react';
import {Avatar, Button, Menu, MenuProps, Switch, Typography} from "antd";
import Image from "next/image";
import useTheme from "antd/es/config-provider/hooks/useTheme";
import {SettingOutlined} from "@ant-design/icons";

function TopBarCustomer() {


    return (
        <>
            <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
            <Typography.Text>千灵</Typography.Text>
            <span>打钱</span>
            <span>↓</span>
            <Typography.Text>主题</Typography.Text>
            {/*todo 主题切换*/}
            <App/>
            <Typography.Text>更多功能</Typography.Text>
        </>
    );
}

export default TopBarCustomer;

const items: MenuProps['items'] = [{
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined/>,
    children: [
        {
            type: 'group',
            label: 'Item 1',
            children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                },
            ],
        },
        {
            type: 'group',
            label: 'Item 2',
            children: [
                {
                    label: 'Option 3',
                    key: 'setting:3',
                },
                {
                    label: 'Option 4',
                    key: 'setting:4',
                },
            ],
        },
    ],
},]

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu style={{width:'200px'}} onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />;
};