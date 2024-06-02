'use client'
import React, {FC, useState} from 'react';
import {Search} from "@/app/ui/components/icons/homeIcons";
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import {useRouter} from "next/navigation";

interface Props {
  onSearch?: (keyword: string) => void
}

const SearchInput: FC<Props> = ({onSearch}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const currentTheme = useSelector(selectCurrentTheme)
  const router = useRouter()
  const searchSong = (e: any) => {
    if (inputValue === '') {
      // todo 提示输入空
      onSearch && onSearch(inputValue)
    } else {
      console.log("搜索歌曲:", inputValue)
      onSearch && onSearch(inputValue)
      e.target.blur()
      router.push(`/result/${inputValue}`)
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      searchSong(e)
    }
  }

  return (
    <div className="flex items-center w-fit px-2 rounded" style={{backgroundColor: currentTheme.config.sidebg}}>
      <input type="text" placeholder={"搜索音乐"} value={inputValue} onKeyDown={handleKeyDown}
             onChange={(e) => setInputValue(e.target.value)}
             className="bg-transparent solid border-transparent h-8 placeholder-opacity-80
             placeholder:text-sm focus:outline-none"/>
      <div className="cursor-pointer" onClick={searchSong}><Search/></div>
    </div>
  );
}

export default SearchInput;