import React from 'react';


// 首页
function About() {
  return <div className={`flex justify-center items-center`}>
    <div
      className={`w-1/2 h-96 border-default-50 border-8 border-solid overflow-hidden bg-default-200 rounded-xl relative`}>
      <div className={`absolute w-1/2 h-60 left-0 my-4 mx-3 duration-1000`}>
        <h1 className={"mx-auto text-purple-700 text-2xl"}>Welcome to Rei Music</h1>
        <h2 className={""}>WX:xiaoxiaoqianling</h2>
        <span>
          Rei Music是一个基于
          <a href="https://react.dev//" target='_blank'
             className={"no-underline text-default-950 cursor-pointer"}>React</a>&
          <a href="https://nextjs.org/" target='_blank'
             className={"no-underline text-default-950 cursor-pointer"}>Next.js</a>&
          <a href="https://ant-design.antgroup.com/index-cn" target='_blank'
             className={"no-underline text-default-950 cursor-pointer"}>Ant Design</a>，项目的
          <a href="https://github.com/xiaoqianling/Rei-Music" target='_blank'
             className={"no-underline text-default-950 cursor-pointer"}>开源地址</a>，感谢支持！
        </span>
      </div>
      {/*<div className={style.streamers}>
                <div className={style.streamer} style={{'--i': 1, '--w': 1.5} as React.CSSProperties}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className={style.streamer} style={{'--i': 2, '--w': 1.6} as React.CSSProperties}></div>
                <div className={style.streamer} style={{'--i': 3, '--w': 1.4} as React.CSSProperties}></div>
                <div className={style.streamer} style={{'--i': 4, '--w': 1.7} as React.CSSProperties}></div>
                <div className={style.streamer_top} style={{'--i': 1} as React.CSSProperties}></div>
            </div>*/}
      {/*<div className={style.QR_Code}>
            二维码
      </div>*/}
    </div>
  </div>


}

export default About;