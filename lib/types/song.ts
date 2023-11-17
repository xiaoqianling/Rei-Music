export interface Song {
  name: string,
  singer: string,
  lyricist?: string,
  composer?: string,
  localAudioSrc?: string,
  filename?: string,
  url?: string,
  image?: string,
  id: number,
  length?: number
}

export const localSong: Song[] = [
  {
    name: "天知河",
    singer: "说说Crystal",
    localAudioSrc: '/music/说说Crystal - 天知河 (Live).ogg',
    image: '/girl.jpg',
    id: 0,
  }, {
    name: "时光盲盒",
    singer: "ChiliChill",
    localAudioSrc: '/music/ChiliChill - 时光盲盒.ogg',
    image: '/girl.jpg',
    id: 1,
  }, {
    name: "TruE",
    singer: "黄龄,HOYO-MiX",
    localAudioSrc: '/music/TruE - 黄龄,HOYO-MiX.flac',
    image: '/girl.jpg',
    id: 3,
  },
]


export const serverSong: Song[] = [
  {
    name: "天知河",
    singer: "说说Crystal",
    url: 'http://localhost:8080/api/music/file/说说Crystal - 天知河 (Live).ogg',
    image: '/girl.jpg',
    id: 1,
  }, {
    name: "阿拉斯加海湾",
    singer: "蓝心羽",
    url: 'http://localhost:8080/api/music/file/蓝心羽 - 阿拉斯加海湾.ogg',
    image: '/girl.jpg',
    id: 2,
  }
]

