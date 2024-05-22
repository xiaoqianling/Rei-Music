// 适用于WebAPI的song定义
export interface Song {
  id?: number,
  name: string,
  singer: string,
  song_url: string,
  album_img: string,
  // 单位秒
  duration: number
  file_size: string
}

export const InitSongs : Song[] = []