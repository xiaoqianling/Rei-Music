import React from 'react';
import style from './home.module.css'
import {Button} from "antd";


// 首页
function Main() {
    return <div className={style.cardContainer}>
        <div className={style.card}>
            <div className={style.card_introduction}>
                <h1>Welcome to Rei Music</h1>
                <h2>WX:xiaoxiaoqianling</h2>
                <span>Rei Music是一个基于<a href="https://react.dev//" target='_blank'>React</a>&
                    <a href="https://nextjs.org/" target='_blank'>Next.js</a>&
                    <a href="https://ant-design.antgroup.com/index-cn" target='_blank'>Ant Design</a>，项目的
                    <a href="https://github.com/xiaoqianling/Rei-Music" target='_blank'>开源地址</a>，感谢支持！</span>
            </div>
            <div className={style.streamers}>
                <div className={style.streamer} style={{'--i': 1, '--w': 1.5} as React.CSSProperties}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className={style.streamer} style={{'--i': 2, '--w': 1.6} as React.CSSProperties}></div>
                <div className={style.streamer} style={{'--i': 3, '--w': 1.4} as React.CSSProperties}></div>
                <div className={style.streamer} style={{'--i': 4, '--w': 1.7} as React.CSSProperties}></div>
                <div className={style.streamer_top} style={{'--i': 1} as React.CSSProperties}></div>
            </div>
            <div className={style.QR_Code}>
                {/*    二维码*/}
            </div>
        </div>
    </div>


}

export default Main;