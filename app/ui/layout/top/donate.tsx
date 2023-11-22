import React from 'react';

function Donate() {
  return (
    <>
      <span className="peer/donate relative select-none">支持一下作者吧</span>
      <div className="w-40 h-40 bg-pink-100 hidden absolute top-16 peer-hover/donate:block">
        二维码
      </div>
    </>
  );
}

export default Donate;