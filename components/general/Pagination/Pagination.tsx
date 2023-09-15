'use client'
import React, {useEffect, useRef, useState} from 'react';
import {PaginationTypes} from "@/components/general/Pagination/PaginationProps";
import PaginationItemProps = PaginationTypes.PaginationItemProps;
import style from './Pagination.module.css'

/**
 * 分页组件
 * @param children 必须只能包含PaginationItem子元素
 * @param activeId 要激活的子选项
 */
export default function Pagination({children, activeId}: { children: React.ReactNode, activeId?: number }) {
    const items = React.Children.toArray(children).filter(child =>
        React.isValidElement(child) && child.type._payload?.value?.name === 'PaginationItem')
    let shouldRender: boolean = true;
    let isItemsWithId: boolean = true;
    const childrenItemsRef = useRef<React.ReactNode[]>([])
    const [activeID, setActiveID] = useState(-1);
    useEffect(() => {
        if (activeId !== undefined) {
            setActiveID(activeId)
        }
    }, [activeId])
    // 检测子元素
    React.Children.toArray(children).forEach(child => {
        if (!React.isValidElement(child) || child.type._payload?.value.name !== 'PaginationItem') {
            console.warn('请勿在Pagination中传入非PaginationItem的子元素')
            shouldRender = false;
        }
    })
    // 检查是否所有子元素具有id属性
    // todo 检查子元素id是否有重叠
    items.forEach(child => {
        if (!React.isValidElement(child) || !Number.isInteger(child.props.id)) {
            console.debug('建议为PaginationItem添加id')
            isItemsWithId = false;
        }
    })
    const handleClick = (e: React.MouseEvent<PaginationItemProps>) => {
        if (activeID !== parseInt(e.currentTarget.id))
            setActiveID(parseInt(e.currentTarget.id))
    }
    if (!isItemsWithId) {
        // 自动生成id，按照元素顺序
        childrenItemsRef.current = React.Children.map(items, (child, index) => {
            return React.cloneElement(child as React.ReactElement, {
                id: index,
                active: index === activeID,
                onClick: handleClick
            })
        })
    } else {
        childrenItemsRef.current = React.Children.map(items, child => {
            return React.cloneElement(child as React.ReactElement, {
                active: child.props.id === activeID,
                onClick: handleClick
            })
        });
    }
    if (!shouldRender) {
        return <PaginationError/>
    }
    return (
        <div className={style.pagination} onClick={(e) => {
        }}>
            {childrenItemsRef.current}
        </div>
    );
}

export function PaginationItem({id, active, title, onClick}: PaginationItemProps) {
    return <span className={active ? style.paginationItemActive : ''} onClick={onClick} id={id}>
        {title}
    </span>
}

function PaginationError() {
    return <span style={{color: "red"}}>
        请勿在分页组件中使用非PaginationItem的子元素！
    </span>
}