'use client'
import React from 'react';

function NotFound() {
  return (
    <div className={"text-2xl"}>
      该页面不存在~ <br/>
      若有问题可
      <a href="https://github.com/xiaoqianling/Rei-Music/issues" target={"_blank"}
         className={"cursor-pointer text-default-950 hover:text-default-700 hover:underline"}>在Github提Issue</a>
      或联系作者 qianling.zy@foxmail.com
    </div>
  );
}

export default NotFound;