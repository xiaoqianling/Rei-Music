import React, {useRef} from 'react';
import {Song} from "@/lib/types/song";
import {useSelector} from "@/lib/redux/store";
import {selectIsPlaying} from "@/lib/redux/slices";
import {Drawer} from "@mui/material";

function MusicBarDrawer({open, onClose, data, onContextMenu, onDoubleClick, currentSongId}: {
  open: boolean,
  onClose: () => void,
  data: Song[] | undefined,
  onDoubleClick: (song: Song) => void,
  onContextMenu: (e: React.MouseEvent) => void,
  currentSongId?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPlaying = useSelector(selectIsPlaying)

  return (
    /*<Drawer placement={'right'} open={open} onClose={onClose} mask={false} size={"default"} panelRef={containerRef}
            className="bg-blue-300" drawerStyle={{backgroundColor: "lightcyan"}}>
      <div className="text-2xl">播放列表</div>
      <Typography.Text>
        共 {data?.length} 首歌曲
      </Typography.Text>
      <List
        className="w-full"
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item) => {
          return <MusicBarDrawerItem song={item} onDoubleClick={onDoubleClick}
                                     isPlaying={isPlaying && currentSongId === item.id}
                                     onContextMenu={onContextMenu}/>
        }}
      />
    </Drawer>*/
    <>
      {/*<Drawer anchor={"right"} open={true} onClose={onClose}>
        nihao
      </Drawer>*/}
    </>
  );
}

export default MusicBarDrawer;