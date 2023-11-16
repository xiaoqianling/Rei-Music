import React from 'react';
import {Typography} from "antd";
import Image from "next/image";

function TopBarCustomer() {

  return (
    <>
      <Image src={'/testUser/avatar.jpg'} alt={'头像'} width={30} height={30} style={{clipPath: 'circle(50%)'}}/>
      <Typography.Text>千灵</Typography.Text>
      <span>打钱</span>
      <span>↓</span>
      <Typography.Text>更多功能</Typography.Text>
    </>
  );
}

export default TopBarCustomer;


