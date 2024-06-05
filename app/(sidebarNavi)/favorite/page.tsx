'use client'
import React, {useEffect} from 'react';
import Songlist from "@/app/ui/components/list/Songlist";
import {useDispatch, useSelector} from "@/lib/redux/store";
import {selectFavoriteSongs, selectUserId} from "@/lib/redux/slices";
import {fetchUserFavoriteSongs} from "@/lib/redux/slices/userSlice/chunk";

// 收藏音乐
function Page() {
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId)
  const favoriteSongs = useSelector(selectFavoriteSongs)

  useEffect(() => {
    dispatch(fetchUserFavoriteSongs(userId))
  }, [dispatch, userId])

  return <div>
    您喜欢的音乐
    <Songlist songs={favoriteSongs}/>
  </div>
}

export default Page;