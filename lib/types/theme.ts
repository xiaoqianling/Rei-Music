export interface Theme {
  name: string,
  value: string,
  config: ThemeColorConfig
}

// TODO 可读颜色设置
export interface ThemeColorConfig {
  main: string,
  primary: string,
  active: string,
  hover: string,
  sidebg: string,
  topbg: string,
  mainbg: string,
  footbg: string,
}

export const themeList: Theme[] = [
  {
    name: '白',
    value: 'white',
    config: {
      main: "#FAFAFA",
      primary: "#12cc91", // 按钮 进度条色
      active: "#E3E3E3",
      hover: '#E9E9E9',
      sidebg: "#F6F6F6",
      topbg: '#FAFAFA',
      mainbg: '#FAFAFA',
      footbg: '#FAFAFA',
    }
  },
  {
    name: '绿',
    value: 'green',
    config: {
      main: "#12cc91",
      primary: "#12cc91",
      active: "#47e7ac",
      hover: "#92e7cc",
      sidebg: "#c8f3e6",
      topbg: "#92e7cc",
      mainbg: "#FAFAFA",
      footbg: "#92e7cc",
    }
  },
  {
    name: '紫',
    value: 'purple',
    config: {
      main: "#CC99FF", primary: "#CC99FF",
      active: "#CC99FF", hover: "#D9B3FF",
      topbg: "#F3E5FF", footbg: "#F3E5FF",
      mainbg: "#FAFAFA", sidebg: "#E6CCFF",
    }
  },
  {
    name: '暗',
    value: 'dark',
    config: {
      main: "#ffffff", primary: "#12cc91",
      active: "#ffffff", hover: "#92e7cc",
      topbg: "#c8f3e6", footbg: "#92e7cc",
      mainbg: "#FAFAFA", sidebg: "#c8f3e6",
    }
  },
]

