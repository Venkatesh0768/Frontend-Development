import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Cards({ data }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 bg-zinc-900 p-5">
      {data && data.length > 0 ? (
        data.map((d) => {
          const imageUrl =
            d.backdrop_path || d.profile_path
              ? `https://image.tmdb.org/t/p/w500/${
                  d.backdrop_path || d.profile_path
                }`
              : "https://via.placeholder.com/500x281.png?text=No+Image+Available";

          const title =
            d.title ||
            d.original_name ||
            d.original_title ||
            "Title Unavailable";
          const rating = d.vote_average ? d.vote_average.toFixed(1) : null;

          return (
            <Link
              to={`/${d.media_type || "movie"}/${d.id}`}
              key={d.id}
              className="relative w-[250px] min-h-[400px] bg-zinc-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 group"
            >
              <img
                className="w-full h-[60%] object-cover"
                src={imageUrl}
                alt={`Poster for ${title}`}
              />

              {rating && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full">
                  <i className="ri-star-fill text-yellow-400"></i> {rating}
                </div>
              )}

              <div className="p-4 text-white h-[40%] flex flex-col">
                <h1 className="text-lg font-bold leading-tight truncate transition-colors group-hover:text-cyan-400">
                  {title}
                </h1>

                <p className="text-sm text-zinc-400 mt-2 flex-grow">
                  {d.overview
                    ? `${d.overview.slice(0, 80)}...`
                    : ""}
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Cards;
