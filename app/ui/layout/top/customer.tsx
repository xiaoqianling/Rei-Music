import React from 'react';
import Image from "next/image";
import Donate from "@/app/ui/layout/top/donate";
import More from "@/app/ui/layout/top/more";
import {ThemeSwitch} from "@/app/ui/layout/top/theme-switch";

function TopBarCustomer() {

  return (
    <div className="flex w-80 justify-around items-center">
      <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
      <span>username</span>
      <Donate/>
      <ThemeSwitch/>
      {/*<More/>*/}
    </div>
  );
}

export default TopBarCustomer;


