// 'use client'
import React, {useState} from 'react';
import styled from "styled-components";
import {Song} from "@/lib/types/song";
import {timeConvert} from "@/components/layout/MusicBar/MusicBarRight";

const Container = styled.div`
  margin: 0;
  padding: 10px 20px;
  width: auto;
  height: 60px;
  background-color: #5fdaf5;
  display: flex;
  flex-flow: row;
  justify-content: start;
  cursor: default;
  user-select: none;

  &:hover {
    background-color: rgb(169, 240, 255);
  }
`

const LeftDiv = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 5px 0;
`
const NameDiv = styled.div`
`
const SingerDiv = styled.div`
  font-size: 13px;
  color: #646464;
  flex-grow: 1;
`
const RightDiv = styled.div`
  background-color: pink;
  flex-grow: 1;
  position: relative;

  & > span {
    position: absolute;
    bottom: 12px;
    right: 0;
    font-size: 13px;
    color: #646464;
  }

  & > div {
    height: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
  }
`

function MusicBarDrawerItem({song, onContextMenu, onDoubleClick, isPlaying}: {
    song: Song,
    onContextMenu: (e: React.MouseEvent) => void,
    onDoubleClick: (song: Song) => void,
    isPlaying?: boolean
}) {
    const [hover, setHover] = useState<boolean>(false)
    // console.log('MusicBarDrawerItem Render!')
    const content = hover ? <div>
            <span>{isPlaying?'暂停':'播放'}</span>
            <span>喜欢</span>
            <span>下载</span>
        </div> :
        <span>{song.length ? timeConvert(song.length) : '未知时长'}</span>;
    const handleDoubleClick = () => {
        onDoubleClick(song);
    }

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }
    return (
        <Container onContextMenu={onContextMenu} onDoubleClick={handleDoubleClick} onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}>
            <LeftDiv>
                <NameDiv>{song.name}</NameDiv>
                <SingerDiv>{song.singer}</SingerDiv>
            </LeftDiv>
            <RightDiv>
                {content}
            </RightDiv>
        </Container>
    );
}

export default MusicBarDrawerItem;