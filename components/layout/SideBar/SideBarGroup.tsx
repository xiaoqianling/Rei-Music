import React, {useEffect, useRef, useState} from 'react';
import style from './SideBar.module.css'
import SideBarGroupTypes from "@/components/layout/SideBar/SideBarGroupProps";
import SideBarGroupItemProps = SideBarGroupTypes.SideBarGroupItemProps;
import SideBarGroupProps = SideBarGroupTypes.SideBarGroupProps;
import {notFound, useRouter} from "next/navigation";

function SideBarGroup({title, children, onSwitch, groupIndex, selectedIndex}
                          : SideBarGroupProps) {
    const [index, setIndex] = useState(-1)
    const childrenItemsRef = useRef<React.ReactNode[]>([]);

    // 第一次渲染时 将初始化index
    useEffect(() => {
        if (selectedIndex[0] === groupIndex)
            setIndex(selectedIndex[1]);
        else
            setIndex(-1)
    }, [selectedIndex])
    const itemElements = React.Children.toArray(children).filter(child =>
        React.isValidElement(child) && child.type === SideBarGroupItem)
    if (index < itemElements.length) {
        const enableItem = (index: number) => {
            setIndex(index);
            onSwitch && onSwitch([groupIndex, index]);
        }
        childrenItemsRef.current = React.Children.map(itemElements, (child, ind) => {
            if (ind === index)
                return React.cloneElement(child as React.ReactElement<any>, {
                    active: true,
                    index: ind,
                    onEnable: enableItem
                })
            return React.cloneElement(child as React.ReactElement<any>, {
                active: false,
                index: ind,
                onEnable: enableItem
            });
        })
    } else {
        console.debug("SideBarGroup:Invalid Index")
        setIndex(-1);
    }

    return (
        <div className={style.sideBarGroup}>
            <div className={style.sideBarGroupTitle}>{title}</div>
            {childrenItemsRef.current}
        </div>
    );
}

export function SideBarGroupItem({text, active, onClick, onCancel, onEnable, onToggle, icon, index, targetRoute}
                                     : SideBarGroupItemProps) {
    let router = useRouter()

    const handleClick = () => {
        onToggle && onToggle(index)
        if (active)
            onCancel && onCancel(index)
        else {
            onEnable && onEnable(index)
            if (targetRoute !== undefined) {
                router.push('/' + targetRoute);
            } else {
                console.log('404~')
                notFound();
            }
        }
        onClick && onClick(index)
    }
    return <div className={`${style.sideBarGroupItem} ${active ? 'active' : ''}`} onClick={handleClick}>
        {icon}{text}
    </div>
}

export default SideBarGroup;