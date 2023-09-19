'use client'
import React from "react";
import style from './Card.module.css'
import Image from "next/image";
import {PlayMusic} from "@/components/icons/homeIcons";

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
            <div className={style.imageContainer}>
                <Image className={style.image} src={url} alt={description} width={180} height={180}/>
                {/*隐藏的播放键*/}
                <div className={style.play}>
                    {/*<PlayOne theme="outline" size="40" fill={undefined}/>*/}
                    <PlayMusic size={40}/>
                </div>
            </div>
            {/*底部描述文本*/}
            <div>{description}</div>
        </div>
    );
};