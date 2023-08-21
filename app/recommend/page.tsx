import React from 'react';
import CardTitle from "@/components/general/CardTitle";
import {Card} from "@/components/general/Card";

function Page() {
// https://cdn.pixabay.com/photo/2023/07/01/15/46/flowers-8100386_1280.jpg
    return (
        <div>
            <h1>推荐</h1>
            <CardTitle title={'HI 千灵 今日为你推荐'}/>
            <Card description={'测试描述'} url={'https://apic.douyucdn.cn/upload/avatar_v3/202207/cd4a359d605c4c7983a33522d3c7d808_big.jpg'}/>
        </div>
    );
}

export default Page;