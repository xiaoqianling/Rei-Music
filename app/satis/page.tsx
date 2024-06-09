'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {serverUrl} from "@/lib/api/music-api";

function FileDurationTest() {
  const [loadingTime, setLoadingTime] = useState<number>(0);

  useEffect(() => {
    const startTime = performance.now();

    axios.get(serverUrl+'/song/download/1')
      .then(() => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        setLoadingTime(duration);
      })
      .catch((error) => {
        console.error('Error fetching file duration:', error);
      });
  }, []);

  return (
    <div>
      {loadingTime !== null && (
        <p>API 请求时间：{loadingTime} 毫秒</p>
      )}
    </div>
  );
}

export default FileDurationTest;