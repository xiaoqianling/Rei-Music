import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import {usePathname} from "next/navigation";

interface Props {
  icon?: React.ReactNode,
  title: string,
  url: string
}

const LinkWrapBase = styled.div`
    margin: 0.125rem 1rem;;
    padding: 0.5rem 0.75rem;;
    width: 12rem /* 192px */;
    border-radius: 0.25rem /* 4px */;
    cursor: pointer;
`
const LinkWrapActive = styled(LinkWrapBase)`
    background-color: ${props => props.color};
`

const LinkWrapHover = styled(LinkWrapBase)`
    &:hover {
        background-color: ${props => props.color};
    }
`

const NaviItem: React.FC<Props> = ({icon, title, url}) => {
  const currentTheme = useSelector(selectCurrentTheme)
  const pathname = usePathname()
  const isActive: boolean = pathname === url
  return (
    <>
      {isActive ?
        <LinkWrapActive color={currentTheme.config.active}>
          {/*hover:bg-default-300 px-3 w-48 rounded mx-4 py-2 my-0.5 cursor-pointer*/}
          <Link className="flex items-center"
                href={url}>
            <span>{icon}</span>
            <span>{title}</span>
          </Link>
        </LinkWrapActive> :
        <LinkWrapHover color={currentTheme.config.hover}>
          <Link className="flex items-center "
                href={url}>
            <span>{icon}</span>
            <span>{title}</span>
          </Link>
        </LinkWrapHover>}
    </>
  );
}

export default NaviItem;