import React from 'react';
import {Card} from "@/app/ui/components/card";
import {Playlist} from "@/lib/types/songs";


function PlaylistCardList({playlist}:{playlist:Playlist[]}) {
  return (
    <div className={"grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 py-2 gap-y-4 gap-x-4 sm:grid-cols-2"}>
      {playlist.map(p => <Card description={p.playlistName} playlistId={p.playlistId} key={p.playlistId}/>)}
    </div>
  );
}

export default PlaylistCardList;