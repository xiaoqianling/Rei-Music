import {Typography} from "antd";
import React from "react";

export function MusicInfo({singer, name}: { name: string, singer: string }) {
    return <div style={{
        display: "flex", flexFlow: "column", width: '200px'
    }}>
        <div>
            <Typography.Text style={{fontSize: '.75rem'}}>{name}</Typography.Text>
            <Typography.Text style={{fontSize: '.75rem'}}> - {singer}</Typography.Text>
        </div>
        <div style={{backgroundColor: 'green'}}>
            操作区
        </div>
    </div>
}