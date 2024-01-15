import React from 'react';
import Link from "next/link";

interface Props {
  icon?: React.ReactNode,
  title: string,
  url: string
}

const NaviItem : React.FC<Props> =  ({icon, title, url}) => {
  return (
    <Link className="w-32 h-8 rounded bg-default-400 flex items-center px-3 cursor-pointer mx-4 my-2 hover:bg-default-main"
          href={url}>
      <span>{icon}</span>
      <span>{title}</span>
    </Link>
  );
}

export default NaviItem;