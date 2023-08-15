import React from 'react';
import style from './TopBar.module.css'

function TopBarCustomer() {
    return (
        <div className={style.customer}>
            <span>头像</span>
            <span>ID</span>
            <span>打钱</span>
            <span>↓</span>
            <span>主题</span>
            <span>主菜单</span>
        </div>
    );
}

export default TopBarCustomer;