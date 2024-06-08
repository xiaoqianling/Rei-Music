import React from 'react';

function Donate() {
  return (
    <>
      <span className="peer/donate select-none">支持作者</span>
      <div className="w-fit h-fit hidden absolute top-16 peer-hover/donate:block">
        {/*<Image className={"rounded-xl"} src={IDQRcard} alt='谢谢你' width={180} height={180}/>*/}
      </div>
    </>
  );
}

export default Donate;