import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  if (!data) return null; // Don't render anything if data not available yet

  const imagePath = data.backdrop_path || data.profile_path;
  const MovieName = data.title || data.original_name || data.original_title;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${imagePath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        
      }}
      className="w-full h-[50vh] flex items-start flex-col  justify-end p-[5%] pl-[10%]  "
    >
      <h1 className="w-[70%] text-white text-4xl font-black justify-end">
        {MovieName}
      </h1>
      <span className="text-white w-[40%] mt-2 ">{data.overview.slice(0, 200)}</span>
      <span className="flex text-white gap-2.5 mt-4">
        <span>
          <i className="ri-film-fill text-yellow-500 pr-1.5"></i>
          {data.media_type}
        </span>
        <span>
          <i className="ri-calendar-fill text-yellow-500  pr-1.5"></i>
          {data.release_date || "No Information"}
        </span>
        <span>
          <i className="ri-earth-fill text-yellow-500 pr-1.5"></i> {data.original_language}
        </span>
      </span>
      <Link className="p-4 bg-purple-500 text-white  mt-3 rounded-xl"> 
       Watch Tralier
      </Link>
    </div>
  );
}

export default Header;
