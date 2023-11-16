import React from 'react';

function CardSkeleton() {
  return (
    <div>
      <div className="group w-fit h-fit flex justify-center items-center cursor-pointer relative bottom-0 mb-2
        transition-[bottom] ease-in-out duration-200 hover:bottom-3">
        <div
          className={"rounded-xl w-44 h-44 bg-gray-400 bg-gradient-to-r from-gray-400 from-40% via-gray-300 via-50% to-gray-400 to-60% bg-200% bg-x-150% animate-skeleton-load"}/>
      </div>
      <div
        className={"bg-gray-400 w-20 h-5 bg-gradient-to-r from-gray-400 from-40% via-gray-300 via-50% to-gray-400 to-60% bg-200% bg-x-150% animate-skeleton-load"}></div>
    </div>
  );
}

export default CardSkeleton;