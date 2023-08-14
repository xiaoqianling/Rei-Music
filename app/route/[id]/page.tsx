import React from "react";

// 动态参数处理方式：默认true:按需加载 false:未生成页面404
// export const dynamicParams: boolean = false;

/**
 * 生成静态页面信息
 */
export function generateStaticParams(params : string) : {id:string}[] {
    console.log("generateStaticParams:", params)
    return [{id: '1'}, {id: '2'}]
}

export default function Page({params}: { params: string }): React.JSX.Element {
    console.log('route:', params)
    return <div>
        route
    </div>
}