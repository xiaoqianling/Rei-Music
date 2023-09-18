export interface Song {
    name: string,
    singer: string,
    Lyricist?: string,
    composer?: string,
    localAudioSrc?: string,
    image?: string,
}

export const testSongs: Song[] = [
    {
        name: "TruE",
        singer: "黄龄,HOYO-MiX",
        localAudioSrc: '/music/TruE - 黄龄,HOYO-MiX.flac',
        image: '/girl.jpg',
    }, {
        name: "TruE",
        singer: "黄龄,HOYO-MiX",
        localAudioSrc: '/music/TruE - 黄龄,HOYO-MiX.flac',
        image: '/girl.jpg',
    },
]
