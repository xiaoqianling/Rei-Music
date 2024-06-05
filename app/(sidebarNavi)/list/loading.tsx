import React from 'react';
import {Skeleton} from "@chakra-ui/react";

function Loading() {
  return (
    <Skeleton>
      <div className="w-full h-20 bg-red-400"></div>
    </Skeleton>
  );
}

export default Loading;