import React from 'react';

function Page() {
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          tupian
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div
        className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p className="text-slate-500 font-medium">
              Product Engineer
            </p>
          </div>
          <button
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
          </button>
        </div>
      </div>

      <div
        className={"h-24 w-24 bg-purple-300 border-red-500 border-4 border-solid hover:border-dashed hover:border-pink-400"}>

      </div>

      <span className="grid grid-cols-3 gap-4 w-96 bg-amber-500 before:content-['nihao']">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>

      <button
        className="transition  ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 before:content-['动画']">
        Save Changes
      </button>


      <div className="ms-52 my-10 text-5xl font-extrabold">
        <span
          className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent"> Tailwind CSS Animation </span>
      </div>
    </div>
  );
}

export default Page;