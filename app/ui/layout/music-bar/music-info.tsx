import React from "react";

export function MusicInfo({singer, name}: { name: string, singer: string }) {
  return <div className={"flex flex-col w-full"}>
    <div>
      <span className={"text-xs"}>{name}</span>
      <span className={"text-xs"}> - {singer}</span>
    </div>
    <div className={"w-full"}>
      操作区
    </div>
  </div>
}