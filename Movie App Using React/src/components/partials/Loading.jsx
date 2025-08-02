import React from 'react';

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">
      <div 
        className="w-16 h-16 border-8 border-zinc-400 border-t-purple-500 rounded-full animate-spin"
      ></div>
    </div>
  );
}

export default Loading;