import React from "react";
import { Link } from "react-router-dom";



function HorizontalCard({ data }) {
   
  return (
    
      <div className="pl-3 w-full flex overflow-x-auto gap-5 pb-4">
        {data && data.length > 0 ? (
          data.map((d) => (
            <Link
              to={`/${d.media_type}/${d.id}`}
              key={d.id}
              className="min-w-[15%] h-auto bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-all duration-300"
            >
              <img
                className="w-full h-[55%] object-cover"
                src={`https://image.tmdb.org/t/p/w500/${
                  d.backdrop_path || d.profile_path
                }`}
                alt={d.title || "Card Image"} 
              />
              <div className="p-3 text-white h-[45%] flex flex-col justify-center">
                <h1 className="text-lg font-semibold truncate">
                  {d.title || d.original_name || d.original_title}
                </h1>
                <p className="text-xs text-zinc-400 mt-1">
                  {d.overview.slice(0, 50)}...
                </p>
              </div>
            </Link>
          ))
        ) : (
         
          <p className="text-zinc-500">Nothing to show here.</p>
        )}
      </div>
    
  );
}

export default HorizontalCard;
