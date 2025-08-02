import React, { useEffect, useState, useCallback } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./partials/Loading";

function Popular() {
  const categoryOptions = [
    { text: "All", value: "all" },
    { text: "Movies", value: "movie" },
    { text: "TV Shows", value: "tv" },
  ];

  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const getEndpoint = (cat, pg) => {
    switch (cat) {
      case "all":
        return `/trending/all/day?page=${pg}`;
      default:
        return `/${cat}/popular?page=${pg}`;
    }
  };

  const getMorePopular = useCallback(async () => {
    try {
      const endpoint = getEndpoint(category, page);
      const { data } = await axios.get(endpoint);

      if (data.results && data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  }, [category, page]);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      setPopular([]);
      setPage(1);
      setHasMore(true);

      try {
        const endpoint = getEndpoint(category, 1);
        const { data } = await axios.get(endpoint);

        setPopular(data.results);
        setPage(2);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [category]); 

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[10vh] flex justify-between items-center px-7">
        <span className="flex text-2xl text-zinc-400 gap-1">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-purple-500 cursor-pointer"
          ></i>
          <h1>Popular</h1>
        </span>
        <TopNav />
        <span className="flex text-white text-xl justify-center items-center gap-4">
          <h1>Filter</h1>
          <Dropdown
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            options={categoryOptions}
            onOptionSelect={setCategory}
          />
        </span>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getMorePopular}
        hasMore={hasMore}
        loader={<h4 className="text-center text-white p-4">Loading...</h4>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  );
}

export default Popular;
