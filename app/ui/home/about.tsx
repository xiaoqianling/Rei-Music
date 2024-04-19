'use client'
import React from 'react';
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import styled from 'styled-components';

const AboutBorder = styled.div`
    width: 50%;
    height: 24rem;
    overflow: hidden;
    border-radius: 0.75rem;
    position: relative;
    border: 2px solid ${props => props.color};
`

// 首页
function About() {
  const currentTheme = useSelector(selectCurrentTheme)
  return <div className={`flex justify-center items-center`}>
    {/*`w-1/2 h-96 border-default-50 border-solid overflow-hidden bg-default-200 rounded-xl relative`*/}
    <AboutBorder color={currentTheme.config.primary}>
      <div className={`w-2/3 h-60 my-4 mx-auto`}>
        <h1 className="mx-auto text-indigo-600 font-bold text-2xl">Welcome to Rei Music</h1> <br/>
        <span className="mt-5 text">
          Rei Music基于
          <a href="https://react.dev//" target='_blank' style={{color: currentTheme.config.primary}}
             className={"no-underline text-default-950 cursor-pointer hover:underline"}>React</a>&
          <a href="https://nextjs.org/" target='_blank' style={{color: currentTheme.config.primary}}
             className={"no-underline text-default-950 cursor-pointer hover:underline"}>Next.js</a>&
          <a href="https://mui.com/material-ui/" target='_blank' style={{color: currentTheme.config.primary}}
             className={"no-underline text-default-950 cursor-pointer hover:underline"}>MUI</a> <br/> 项目的
          <a href="https://github.com/xiaoqianling/Rei-Music" target='_blank' style={{color: currentTheme.config.primary}}
             className={"no-underline text-default-950 cursor-pointer hover:underline"}>开源地址</a>，感谢支持！
        </span>
      </div>
    </AboutBorder>
  </div>


}

export default About;