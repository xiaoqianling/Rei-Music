// 适用于WebAPI的song定义
export interface Song {
  id: number,
  name: string,
  singer: string,
  song_url: string,
  // 单位秒
  duration: number
  file_size: string
}

export interface Playlist {
  playlistId: number,
  playlistName: string,
  userId: number
}

export interface Comment {
  commentId: number;
  content: string;
  createdTime: Date;
  userId: number;
  userDisplayName: string;
  songId: number;
}
export const InitSongs : Song[] = []