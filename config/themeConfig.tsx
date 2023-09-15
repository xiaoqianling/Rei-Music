import {ThemeConfig} from "antd/es/config-provider/context";
import {MenuProps} from "antd/es/menu/menu";
import {theme} from "antd";

export const defaultTheme: ThemeConfig = {
    token: {
        colorPrimary: '#1ECD98',
        colorBgContainer: '#f5f5f5',
        colorBgLayout: '#f5f5f5',
    },
    algorithm: theme.defaultAlgorithm,
    components: {
        Layout: {
            headerBg: '#1ECD98',
            siderBg: '#1ECD98',
            footerBg: 'rgba(175,236,217,0.49)'
        },
        Menu: {
            itemBg: '#f0fff8',
            itemHoverBg: '#c9ffe8',
            itemSelectedColor: '#11a67e',
            itemSelectedBg: '#99f2ce',
            algorithm: true
        },


    }
}

export const sakuraTheme: ThemeConfig = {
    components: {
        Layout: {
            colorPrimary: '#fff000',
            headerBg: '#ffb5b5',
            siderBg: '#ffb5b5',
            footerBg: '#ffb5b5',
        },
        Button: {
            colorPrimary: '#ffb5e1',
            algorithm: true
        },
        Input: {
            colorPrimary: '#ff1a9f',
            algorithm: true
        },
    }
}

export const AntdTheme : ThemeConfig = {
  "token": {
    "colorPrimary": "#1ecd98",
    "colorInfo": "#1ecd98"
  }
}

// 可选的主题
export const themeItems: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];