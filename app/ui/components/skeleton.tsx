import React from 'react';
import CardSkeleton from "@/app/ui/components/cardSkeleton";

function Skeleton() {
  return (
    <div>

      {/*扫光效果 bg-gray-400*/}
      <h1
        className="mb-4 text-3xl w-20  h-9 bg-gray-400 bg-gradient-to-r from-gray-400 from-40% via-gray-300 via-50% to-gray-400 to-60% bg-200% bg-x-150% animate-skeleton-load">
      </h1>
      <h3
        className="mb-3 text-xl w-80 h-7 bg-gray-400 bg-gradient-to-r from-gray-400 from-40% via-gray-300 via-50% to-gray-400 to-60% bg-200% bg-x-150% animate-skeleton-load"></h3>
      {/*<Div className='animate-skeleton-load'/>*/}
      <div className={"grid grid-cols-6 py-2 gap-y-4 bg-pink-100"}>
        <CardSkeleton/><CardSkeleton/>
        <CardSkeleton/><CardSkeleton/>
        <CardSkeleton/><CardSkeleton/>
        <CardSkeleton/><CardSkeleton/>
        <CardSkeleton/><CardSkeleton/>
        <CardSkeleton/><CardSkeleton/>
      </div>
    </div>
  );
}

export default Skeleton;