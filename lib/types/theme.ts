export interface Theme {
  name: string,
  value: string,
  config: ThemeColorConfig
}

export interface ThemeColorConfig {
  main: string,
  primary: string,
  active: string,
  hover: string,
  sidebg: string,
  topbg: string,
  mainbg: string,
  footbg: string,
  listbg:string
}

export const themeList: Theme[] = [
  {
    name: '白',
    value: 'white',
    config: {
      main: "#FAFAFA",
      primary: "#59d9d9", // 按钮 进度条色
      active: "#B2F5EA",
      hover: '#E9E9E9',
      sidebg: "#F6F6F6",
      topbg: '#FAFAFA',
      mainbg: '#FAFAFA',
      footbg: '#FAFAFA',
      listbg: "#b7f3f3"
    }
  },
  {
    name: '默认',
    value: 'default',
    config: {
      main: "#59d9d9",
      primary: "#59d9d9",
      active: "rgba(79,231,231,0.8)",
      hover: "rgba(161,255,255,0.5)",
      sidebg: "rgba(194,252,252,0.2)",
      topbg: "rgba(194,252,252,0.4)",
      mainbg: "#FAFAFA",
      footbg: "rgba(194,252,252,0.4)",
      listbg: "#b7f3f3"
    }
  },
  {
    name: '紫',
    value: 'purple',
    config: {
      main: "#CC99FF", primary: "#CC99FF",
      active: "rgba(216,177,255,0.9)", hover: "rgba(216,177,255,0.6)",
      topbg: "rgba(243,229,255,0.6)", footbg: "rgba(243,229,255,0.6)",
      mainbg: "#FAFAFA", sidebg: "rgba(230,204,255,0.3)",
      listbg: "#eddfff"
    }
  },

]

/*
{
    name: '暗',
    value: 'dark',
    config: {
      main: "#ffffff", primary: "#12cc91",
      active: "#ffffff", hover: "#92e7cc",
      topbg: "#c8f3e6", footbg: "#92e7cc",
      mainbg: "#FAFAFA", sidebg: "#c8f3e6",
      listbg: "#59d9d9"
    }
  },
* */

