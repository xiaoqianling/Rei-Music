'use client'
import React from 'react';

function More() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <span className="peer/more relative select-none">更多功能</span>
      <div className="hidden bg-gray-100 h-fit w-20 flex-row absolute top-16 right-1 peer-hover/more:flex">
        产能不足 鸽了
      </div>

    </>
  );
}

export default More;