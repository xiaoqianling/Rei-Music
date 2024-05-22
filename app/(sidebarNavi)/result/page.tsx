// 'use client'
import React, {Suspense} from 'react';
import {fetchUsers} from "@/lib/storage/data";
import Songlist from "@/app/ui/components/list/songlist";

async function getData(keyword: string) {
  return await fetchUsers()
}


// 搜索结果页面
async function Page() {
  // console.log('key:',keyword)
  // const users = await getData(keyword)

  return (
    <div>
      查询结果
      <Suspense fallback={<div>列表错误</div>}>
        <Songlist/>
      </Suspense>
    </div>
  );
}

export default Page;