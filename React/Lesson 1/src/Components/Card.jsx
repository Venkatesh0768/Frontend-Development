import React from "react";

function Card({ user ,handleRemove , index }) {
  return (
    <div className="w-52 bg-zinc-50 m-2 rounded-lg flex justify-center p-4 flex-col items-center">
      <div className="w-24 h-24 bg-amber-800 rounded-full overflow-hidden">
        <img src={user.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center mt-2">
        <h1 className="font-bold">{user.name}</h1>
        <p className=" opacity-60 text-sm">{user.email}</p>
        <button onClick={()=>handleRemove(index)} className="bg-red-600 px-4 py-1 mt-2  rounded-2xl text-white ">
          Remove it
        </button>
      </div>
    </div>
  );
}

export default Card;
