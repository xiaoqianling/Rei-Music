import React from 'react';
import {Card} from "@/components/general/Card/Card";
import style from './page.module.css'

function Page() {
// https://cdn.pixabay.com/photo/2023/07/01/15/46/flowers-8100386_1280.jpg
    return (
        <div className={style.recommend}>
            <h1 className={style.pageTitle}>推荐</h1>
            <h3 className={style.title}>Hi 千灵 今日为你推荐</h3>
            <Card description={'测试描述'} url={'https://img9.vilipix.com/picture/pages/regular/2022/08/31/14/102210467_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000'}/>
        </div>
    );
}

export default Page;