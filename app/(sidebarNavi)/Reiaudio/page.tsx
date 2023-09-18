import React from 'react';
import AudioPlayer from "@/app/(sidebarNavi)/Reiaudio/AudioPlayer";
import {testSongs} from "@/app/(sidebarNavi)/Reiaudio/song";

function Page() {
    return (
        <div>
            <AudioPlayer songList={testSongs}/>
        </div>
    );
}

export default Page;