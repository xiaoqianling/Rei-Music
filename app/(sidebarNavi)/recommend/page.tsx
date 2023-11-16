import React from 'react';
import {Card} from "@/app/ui/components/card";

function Page() {
// https://cdn.pixabay.com/photo/2023/07/01/15/46/flowers-8100386_1280.jpg
  return (
    <div>
      <h1 className={"mb-4 text-3xl"}>推荐</h1>
      <h3 className={"mb-3 text-xl"}>Hi 千灵 今日为你推荐</h3>
      <Card description={'测试描述'}
            url={'https://img9.vilipix.com/picture/pages/regular/2022/08/31/14/102210467_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000'}/>
    </div>
  );
}

export default Page;