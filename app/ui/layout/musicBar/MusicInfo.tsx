import {Typography} from "antd";
import React from "react";

export function MusicInfo({singer, name}: { name: string, singer: string }) {
  return <div className={"flex flex-col w-full"}>
    <div>
      <Typography.Text className={"text-xs"}>{name}</Typography.Text>
      <Typography.Text className={"text-xs"}> - {singer}</Typography.Text>
    </div>
    <div className={"w-full"}>
      操作区
    </div>
  </div>
}