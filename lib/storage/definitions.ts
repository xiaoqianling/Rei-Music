// 数据实体类型定义

export interface User {
  // 用户uuid
  id?: string,
  name: string,
  password: string,
  permission: boolean,
  // 外键 歌单id
  own_playlist: string[],
  favorite_playlist: string[],
}

export interface Playlist {
  id: string,
  // 歌曲id
  songs: string[],
  owner: string
}
