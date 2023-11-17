import React from 'react';
import {Icon} from "@/app/ui/components/icons/homeIcons";
import {usePathname, useRouter} from "next/navigation";

function Logo() {

  const router = useRouter();
  const pathname = usePathname();
  const handleBackHome = () => {
    if (pathname !== '/') {
      console.log('返回主页')
      router.push('/')
    }
  }

  return (
    <div className={"w-64 flex items-center font-bold text-xl cursor-pointer"} onClick={handleBackHome}>
      <Icon size={40}/>
      <span className="md:text-2xl">Rei Music</span>
    </div>
  );
}

export default Logo;