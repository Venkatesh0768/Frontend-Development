import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-[15%] h-screen border-r-2 border-zinc-700">
      <h1 className="w-full  h-15 flex justify-start ml-10 items-center text-2xl font-bold gap-3 text-purple-400">
        <i className="ri-tv-2-fill"></i>
        MovieApp
      </h1>
      <nav>
        <div className="w-full">
          <h1 className="text-2xl text-white  p-4 pl-10 font-bold ">
            New Feed
          </h1>
          <Link to="/trending" className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-fire-fill "></i>
            <h1>Trending</h1>
          </Link>

          <Link to="/popular" className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-bard-fill"></i>
            <h1>Popular</h1>
          </Link>

          <Link to="/movies" className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-movie-2-line"></i>
            <h1>Movies</h1>
          </Link>
          <Link to="/tvshows" className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-tv-2-fill"></i>
            <h1>Tv Shows</h1>
          </Link>
          <Link to="/people" className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-user-fill"></i>
            <h1>People</h1>
          </Link>
        </div>
        <hr className="mt-10 h-[1px] bg-zinc-500 border-zinc-700 mx-10" />

        <div className="w-full ">
          <h1 className="text-2xl text-white  p-4 pl-10 font-bold ">
            Website Information
          </h1>
          <Link className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-information-fill"></i>
            <h1>About Website</h1>
          </Link>

          <Link className="flex justify-start   pl-20 p-4 items-center text-xl  gap-3 text-zinc-200 hover:bg-purple-600">
            <i className="ri-phone-fill"></i>
            <h1>Contact Us</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
