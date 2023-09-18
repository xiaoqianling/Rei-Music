import {ThemeConfig} from "antd/es/config-provider/context";
import {theme} from "antd";
import {DefaultOptionType} from "rc-select/lib/Select";
import {SeedToken} from "antd/es/theme/interface";

// 默认主题
const defaultThemeColorPrimary: string = '#1ecd98'
const defaultThemeSeedToken: SeedToken = {
    blue: "",
    borderRadius: 0,
    colorBgBase: "",
    colorError: "",
    colorInfo: "",
    colorLink: "",
    colorPrimary: defaultThemeColorPrimary,
    colorSuccess: "",
    colorTextBase: "",
    colorWarning: "",
    controlHeight: 0,
    cyan: "",
    fontFamily: "",
    fontFamilyCode: "",
    fontSize: 0,
    geekblue: "",
    gold: "",
    green: "",
    lime: "",
    lineType: "",
    lineWidth: 0,
    magenta: "",
    motion: false,
    motionBase: 0,
    motionEaseInBack: "",
    motionEaseInOut: "",
    motionEaseInOutCirc: "",
    motionEaseInQuint: "",
    motionEaseOut: "",
    motionEaseOutBack: "",
    motionEaseOutCirc: "",
    motionEaseOutQuint: "",
    motionUnit: 0,
    opacityImage: 0,
    orange: "",
    pink: "",
    purple: "",
    red: "",
    sizePopupArrow: 0,
    sizeStep: 0,
    sizeUnit: 0,
    volcano: "",
    wireframe: false,
    yellow: "",
    zIndexBase: 0,
    zIndexPopupBase: 0
}
const defaultThemeToken = theme.defaultAlgorithm(defaultThemeSeedToken)
export const defaultTheme: ThemeConfig = {
    token: {
        colorPrimary: defaultThemeToken.colorPrimary,
        colorBgContainer: '#f5f5f5',
        colorBgLayout: '#f5f5f5',
    },
    algorithm: theme.defaultAlgorithm,
    components: {
        Layout: {
            headerBg: defaultThemeToken.colorPrimary,
            footerBg: defaultThemeToken.colorPrimaryBgHover,
        },
        Menu: {
            itemBg: defaultThemeToken.colorPrimaryBg,
            itemHoverBg: defaultThemeToken.colorPrimaryBgHover,
            itemSelectedColor: defaultThemeToken.colorPrimaryTextActive,
            itemSelectedBg: defaultThemeToken.colorPrimaryBorder,
            algorithm: true
        },
    }
}

// 樱花主题
const sakuraThemeColorPrimary: string = '#ffb5b5'
const sakuraThemeSeedToken: SeedToken = {
    blue: "",
    borderRadius: 0,
    colorBgBase: "",
    colorError: "",
    colorInfo: "",
    colorLink: "",
    colorPrimary: sakuraThemeColorPrimary,
    colorSuccess: "",
    colorTextBase: "",
    colorWarning: "",
    controlHeight: 0,
    cyan: "",
    fontFamily: "",
    fontFamilyCode: "",
    fontSize: 0,
    geekblue: "",
    gold: "",
    green: "",
    lime: "",
    lineType: "",
    lineWidth: 0,
    magenta: "",
    motion: false,
    motionBase: 0,
    motionEaseInBack: "",
    motionEaseInOut: "",
    motionEaseInOutCirc: "",
    motionEaseInQuint: "",
    motionEaseOut: "",
    motionEaseOutBack: "",
    motionEaseOutCirc: "",
    motionEaseOutQuint: "",
    motionUnit: 0,
    opacityImage: 0,
    orange: "",
    pink: "",
    purple: "",
    red: "",
    sizePopupArrow: 0,
    sizeStep: 0,
    sizeUnit: 0,
    volcano: "",
    wireframe: false,
    yellow: "",
    zIndexBase: 0,
    zIndexPopupBase: 0
}
const sakuraThemeToken = theme.defaultAlgorithm(sakuraThemeSeedToken)
export const sakuraTheme: ThemeConfig = {
    token: {
        colorPrimary: sakuraThemeToken.colorPrimary,
        colorBgContainer: '#f5f5f5',
        colorBgLayout: '#f5f5f5',
    },
    algorithm: theme.defaultAlgorithm,
    components: {
        Layout: {
            headerBg: sakuraThemeToken.colorPrimary,
            footerBg: sakuraThemeToken.colorPrimaryHover,
        },
        Menu: {
            itemBg: sakuraThemeToken.colorPrimaryBg,
            itemHoverBg: sakuraThemeToken.colorPrimaryHover,
            itemSelectedColor: sakuraThemeToken.colorPrimaryTextActive,
            itemSelectedBg: sakuraThemeToken.colorPrimaryHover,
            algorithm: true
        },
    }
}

// 可选的主题
export const themeItems: DefaultOptionType[] = [
    {
        label: '主题列表',
        options: [
            {label: '默认主题', value: 'default'},
            {label: '桃花主题', value: 'sakura'},
        ],
    }
]
export const themeMap = new Map<string, ThemeConfig>([
    ['default', defaultTheme], ['sakura', sakuraTheme]])
