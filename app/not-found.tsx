'use client'
import React from 'react';
import {Typography} from "antd";

function NotFound() {
    return (
        /*<div style={{flexGrow:1, display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column", color:"white"}}>
            <h2>该页面不存在~</h2> <br/>
            <h2>若有问题请告知作者 xiaoxiaoqianling@qq.com</h2>
        </div>*/
        <div>
            <Typography.Text>
                该页面不存在~ <br/>
                若有问题请告知作者 xiaoxiaoqianling@qq.com
            </Typography.Text>
        </div>
    );
}

export default NotFound;