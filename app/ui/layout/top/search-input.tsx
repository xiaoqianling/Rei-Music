import React, {FC, useState} from 'react';
import {Search} from "@/app/ui/components/icons/homeIcons";

interface Props {
  onSearch?: (keyword: string) => void
}

const SearchInput: FC<Props> = ({onSearch}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const searchSong = (e: any) => {
    if (inputValue === '') {
      onSearch && onSearch(inputValue)
    } else {
      console.log("搜索歌曲:", inputValue)
      onSearch && onSearch(inputValue)
      e.target.blur()
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      searchSong(e)
    }
  }

  return (
    <div className="flex items-center w-fit px-2 bg-default-200 rounded">
      <input type="text" placeholder={"搜索音乐"} value={inputValue} onKeyDown={handleKeyDown}
             onChange={(e) => setInputValue(e.target.value)}
             className="bg-transparent solid border-transparent h-8 placeholder-opacity-80
             placeholder:text-sm placeholder-sky-700 focus:outline-none"/>
      <div className="cursor-pointer" onClick={searchSong}><Search/></div>
    </div>
  );
}

export default SearchInput;