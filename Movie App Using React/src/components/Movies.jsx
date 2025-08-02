import React, { useEffect, useState, useCallback } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./partials/Loading";

function Movies() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const getMoreMovies = useCallback(async () => {
    try {
      const { data } = await axios.get(`/movie/popular?page=${page}`);

      if (data.results && data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  }, [page]);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      setLoading(true);
      setMovies([]);
      setPage(1);
      setHasMore(true);

      try {
        const { data } = await axios.get(`/movie/popular?page=1`);
        setMovies(data.results);
        setPage(2);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[10vh] flex justify-start items-center px-7">
        <span className="flex text-2xl text-zinc-400 gap-3">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-purple-500 cursor-pointer"
          ></i>
          <h1>Movies</h1>
        </span>
        <TopNav />
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={getMoreMovies}
        hasMore={hasMore}
        loader={<h4 className="text-center text-white p-4">Loading...</h4>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  );
}

export default Movies;
