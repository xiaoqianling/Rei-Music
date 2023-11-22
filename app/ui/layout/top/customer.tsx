import React from 'react';
import Image from "next/image";
import Donate from "@/app/ui/layout/top/donate";
import More from "@/app/ui/layout/top/more";

function TopBarCustomer() {

  return (
    <div className="flex w-72 justify-around items-center">
      <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
      <span>千灵</span>
      <Donate/>
      {/*<span>更多功能</span>*/}
      <More/>
    </div>
  );
}

export default TopBarCustomer;


