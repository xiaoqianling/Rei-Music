import React from 'react';
import style from "@/app/recommend/page.module.css";
import Pagination, {PaginationItem} from "@/components/general/Pagination/Pagination";

function Layout({children}: { children: React.ReactNode }) {
    return (

        <>
            <div className={style.music}>
                <h1 className={style.pageTitle}>音乐馆</h1>
                <Pagination activeId={2}>
                    <PaginationItem id={2} title='精选'/>
                    <PaginationItem id={0} title='有声电台'/>
                    <PaginationItem title='排行'/>
                </Pagination>

            </div> <br/>
        </>
    );
}

export default Layout;