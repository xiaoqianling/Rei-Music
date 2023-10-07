import ErrnoException = NodeJS.ErrnoException;


export interface Song {
    name: string,
    singer: string,
    lyricist?: string,
    composer?: string,
    localAudioSrc?: string,
    url?: string,
    image?: string,
    id: number,
}

export const localSong: Song[] = [
    {
        name: "天知河",
        singer: "说说Crystal",
        localAudioSrc: '/music/说说Crystal - 天知河 (Live).ogg',
        image: '/girl.jpg',
        id: 0,
    }, {
        name: "TruE",
        singer: "黄龄,HOYO-MiX",
        localAudioSrc: '/music/TruE - 黄龄,HOYO-MiX.flac',
        image: '/girl.jpg',
        id: 1,
    }, {
        name: "TruE",
        singer: "黄龄,HOYO-MiX",
        localAudioSrc: '/music/TruE - 黄龄,HOYO-MiX.flac',
        image: '/girl.jpg',
        id: 2,
    },
]


export const serverSong: Song[] = [
    {
        name: "天知河",
        singer: "说说Crystal",
        url:  'http://localhost:8080/api/music/file/说说Crystal - 天知河 (Live).ogg',
        image: '/girl.jpg',
        id: 0,
    }, {
        name: "时光盲盒",
        singer: "ChiliChill",
        url: 'http://localhost:8080/api/music/file/ChiliChill - 时光盲盒.ogg',
        image: '/girl.jpg',
        id: 1,
    }, {
        name: "TruE",
        singer: "黄龄,HOYO-MiX",
        localAudioSrc: '/music/TruE - 黄龄,HOYO-MiX.flac',
        image: '/girl.jpg',
        id: 2,
    },
]

