import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import noImage from "../../../public/noImage.jpg";
import { Link } from "react-router-dom";


function TopNav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      console.log(data.results);
    } catch (e) {
      console.error("Error fetching search results:", e);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="h-25 gap-4 flex items-center pl-[90px] relative">
      <i className="ri-search-line text-3xl text-white"></i>

      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="outline-none text-white rounded-3xl p-4 text-xl bg-zinc-700 w-[1000px]"
        type="text"
        placeholder="Search Movie"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill text-2xl text-white cursor-pointer"
        ></i>
      )}

      {query.length > 0 && (
        <div className="absolute top-[110px] left-[90px] bg-zinc-800 w-[1000px] max-h-[400px] rounded-xl overflow-auto shadow-lg space-y-3 p-4 z-10">
          {searches.map((s, i) => (
            <Link
              key={i}
              to="#"
              className="bg-zinc-600 p-4 flex items-center gap-4 rounded-xl hover:bg-purple-500 transition-colors duration-200"
            >
              <img
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noImage
                }
                alt="Movie Poster"
                className="w-12 h-16 bg-zinc-500 rounded object-cover"
              />
              <span className="font-semibold text-xl text-zinc-200">
                {s.name || s.title || s.original_title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopNav;
