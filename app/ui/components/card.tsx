'use client'
import React from "react";
import Image from "next/image";
import {PlayMusic} from "@/app/ui/components/icons/homeIcons";

type Props = {
  url: string,
  description: string,
  other?: string
};
export const Card = ({url, description}: Props) => {
  const fetchImage = async () => {
    await fetch(url, {method: "POST"})
      .then(response => {
        console.log(response)
      })
  }

  return (
    <div>
      <div className="group w-fit h-fit flex justify-center items-center cursor-pointer relative bottom-0
              transition-[bottom] ease-in-out duration-200 hover:bottom-3">
        <Image className={"rounded-xl"} src={url} alt={description} width={180} height={180}/>
        {/*隐藏的播放键*/}
        <div
          className={"absolute opacity-0 transition-[opacity] ease-in duration-150 bg-transparent group-hover:opacity-80"}>
          <PlayMusic size={40}/>
        </div>
      </div>
      {/*底部描述文本*/}
      <div>{description}</div>
    </div>
  );
};