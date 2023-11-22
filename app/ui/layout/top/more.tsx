import React from 'react';

function More() {
  return (
    <>
      <span className="peer/more relative select-none">更多功能</span>
      <div className="hidden bg-pink-100 h-52 w-20 flex-row absolute top-16 right-1 peer-hover/more:flex">
        列表
      </div>
    </>
  );
}

export default More;