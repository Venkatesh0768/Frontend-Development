import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./partials/Loading";

function Trending() {
  const navigate = useNavigate();

  const trendingOptions = [
    { text: "All", value: "all" },
    { text: "Movies", value: "movie" },
    { text: "TV Shows", value: "tv" },
  ];

  const DurationOptions = [
    { text: "Day", value: "day" },
    { text: "Week", value: "week" },
  ];

  const [category, setCategory] = useState("all");

  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrendings = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refershhandler = () => {
    if (trending.length === 0) {
      getTrendings();
    } else {
      setPage(1);
      setTrending([]);
      getTrendings();
    }
  };

  useEffect(() => {
    refershhandler();
  }, [category, duration]);

  console.log(category);

  return trending ? (
    <div className="w-full h-screen ">
      <div className="w-full h-[10vh]  flex justify-between items-center px-7 ">
        <span className="flex text-2xl text-zinc-400 gap-1 ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-purple-500"
          ></i>
          <h1>Trending</h1>
        </span>
        <TopNav />
        <span className="flex text-white text-xl justify-center items-center gap-4">
          <h1>Filter</h1>
          <Dropdown
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            options={trendingOptions}
            onOptionSelect={setCategory}
          />
        </span>
        <span className="flex text-white text-xl justify-center items-center gap-4">
             <h1>Duration</h1>
          <Dropdown
            title={duration.charAt(0).toUpperCase() + duration.slice(1)}
            options={DurationOptions}
            onOptionSelect={setDuration}
          />
        </span>
      </div>
      <div>
        <InfiniteScroll
          dataLength={trending.length}
          next={getTrendings}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Cards data={trending} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
