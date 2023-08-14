import React from 'react';
import style from './home.module.css'

// 首页
function Main() {
    return <div className={style.cardContainer}>
        <div className={style.card}>
            <div className={style.card_introduction}>
                <a href="#">Welcome to Rei Music</a>
                <h2>WX:xiaoxiaoqianling</h2>
                <span>Rei Music是一个基于<a href="https://react.docschina.org/">React</a>和
                    <a href="https://nextjs.org/">Next.js</a>的小前端项目，项目的<a href="">开源地址</a>，感谢支持！</span>
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