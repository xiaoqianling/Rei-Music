import React from "react";

namespace SideBarGroupTypes {
    interface SideBarGroupProps {
        title: string,
        children: React.ReactNode,
        onSwitch?: (index:number[]) => void,
        selectedIndex: number[],
        groupIndex: number,
    }
    interface SideBarGroupItemProps {
        text: string,
        active?: boolean,
        onClick?: (number) => void,
        onCancel?: (number) => void,
        onEnable?: (number) => void,
        icon?: React.ReactNode,
        index?: number,
        onToggle?: (number) => void,
        targetRoute?: string,
    }
}


export default SideBarGroupTypes;